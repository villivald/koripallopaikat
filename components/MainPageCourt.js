import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LinkIcon from "@material-ui/icons/Link";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import distance from "../util/distance";

const Court = ({ court }) => {
  const [isShown, setIsShown] = useState(false);

  const d = distance(court.lat, court.lon);

  return (
    <Card className="basketballFieldMain">
      <Image className="cardMedia" src={court.pic} alt={court.address} />
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          <Link
            key={court._id}
            href="/courts/[id]"
            as={`/courts/${court.address}`}
          >
            {court.address}
          </Link>
        </Typography>
        <Typography component={"span"} color="textSecondary">
          Distance: {d > 1000 ? <CircularProgress size={15} /> : d} km
        </Typography>
        <Typography color="textSecondary">
          Surface: {court.surface}{" "}
          <span
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            style={{ cursor: "pointer" }}
          >
            ❓
          </span>
        </Typography>
        {isShown && (
          <div className="hoverPicture">
            <Image
              src={court.surfacePic}
              alt="court surface"
              width={150}
              height={150}
            />
          </div>
        )}
        <Typography color="textSecondary">Place: {court.type}</Typography>
        <Typography color="textSecondary">Baskets: {court.baskets}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={court.link}
          aria-label="court link"
          title="Open in new tab"
          target="_blank"
        >
          <LinkIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={`https://villivald.com/koripallopaikat/${court._id}.webp`}
          aria-label="court image"
          title="Open in new tab"
          target="_blank"
        >
          <ImageOutlinedIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={`https://www.google.com/maps/place/${court.address}+Helsinki`}
          aria-label="google maps"
          title="Open in new tab"
          target="_blank"
        >
          <RoomOutlinedIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={"mailto:maxim@villivald.com"}
          aria-label="report"
          title="Open in new tab"
          target="_blank"
        >
          <ReportOutlinedIcon className="iconLink" />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Court;
