import React, { useState } from "react";
import Link from "next/link";
import { Link as MUILink } from "@material-ui/core";
import Image from "next/image";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LinkIcon from "@material-ui/icons/Link";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const Court = ({ court }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Card className="basketballFieldMain">
      <Link key={court._id} href="/courts/[id]" as={`/courts/${court.address}`}>
        <Image
          className="cardMedia"
          src={court.pic}
          alt={court.address}
          placeholder="blur"
        />
      </Link>
      <CardContent>
        <Typography color="textPrimary">
          <Link
            key={court._id}
            href="/courts/[id]"
            as={`/courts/${court.address}`}
            passHref
          >
            <MUILink>{court.address}</MUILink>
          </Link>
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          {court.district}
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
          rel="noopener"
        >
          <LinkIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={`https://villivald.com/koripallopaikat/${court._id}.webp`}
          aria-label="court image"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <ImageOutlinedIcon className="iconLink" />
        </Button>
        <Button
          size="small"
          href={`https://www.google.com/maps/place/${court.address}+Helsinki`}
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

export default Court;
