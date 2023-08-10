import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Link as MUILink,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LinkIcon from "@mui/icons-material/Link";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

import distance from "../util/distance";

import asphalt from "../public/images/surfaces/asphalt.webp";
import soft from "../public/images/surfaces/soft.webp";
import gravel from "../public/images/surfaces/gravel.webp";
import agrass from "../public/images/surfaces/agrass.webp";
import stone from "../public/images/surfaces/stone.webp";

const CourtList = ({ court }) => {
  const [isShown, setIsShown] = useState(false);
  const d = distance(court.lat, court.lon);

  return (
    <Card className="basketballField">
      <div>
        <Link
          key={court._id}
          href="/courts/[id]"
          as={`/courts/${court.address}`}
          passHref
        >
          <CardMedia
            className="cardMedia"
            image={court.listPic}
            title="basketball court"
          />
        </Link>
        {court.childrenAlert && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/children.png"
            alt="Warning, Children"
            height={40}
            width={40}
            className="childrenAlert"
          />
        )}
      </div>
      <CardContent>
        <Typography color="textPrimary">
          <Link
            key={court._id}
            href="/courts/[id]"
            as={`/courts/${court.address}`}
            passHref
          >
            <span className="cardText">{court.address}</span>
          </Link>
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          {court.district}
        </Typography>
        <Typography component={"span"} color="textSecondary">
          Distance:{" "}
          <MUILink
            target="_blank"
            href={`https://www.google.fi/maps/dir//${court.address}`}
          >
            {d > 1000 ? <CircularProgress size={15} /> : d} km
          </MUILink>
        </Typography>
        <Typography color="textSecondary">
          <span className="cardTitle">Surface:</span>{" "}
          <span className="cardText">{court.surface}</span>
          <span
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            className="surfaceIcon"
          >
            ⚡️
          </span>
        </Typography>
        {isShown && (
          <div className="hoverPictureContainer">
            <Image
              src={
                court.surface === "asphalt"
                  ? asphalt
                  : court.surface === "gravel"
                  ? gravel
                  : court.surface === "artificial grass"
                  ? agrass
                  : court.surface === "stone tiles"
                  ? stone
                  : soft
              }
              alt="court surface"
              width={150}
              height={150}
              className="hoverPicture"
            />
          </div>
        )}
        <Typography color="textSecondary">
          <span>Place: </span>
          <span>{court.type}</span>
        </Typography>
        <Typography color="textSecondary">Baskets: {court.baskets}</Typography>
        {court.info && <Typography color="error">{court.info}</Typography>}
      </CardContent>
      <CardActions className="iconLinks">
        <Button
          size="small"
          href={court.link}
          aria-label="court link"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <LinkIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={court.pic}
          aria-label="court image"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <ImageOutlinedIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={`https://www.google.com/maps/place/${court.address}+${court.city}`}
          aria-label="google maps"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <RoomOutlinedIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={`mailto:koripallopaikat@gmail.com?subject=Issue%20with%20${court.address}%20court&body=Description%20of%20an%20issue:%20`}
          aria-label="report"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <ReportOutlinedIcon className="iconLink" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CourtList;
