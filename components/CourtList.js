import React, { useState } from "react";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
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

const CourtList = ({ court }) => {
  const [isShown, setIsShown] = useState(false);
  const d = distance(court.lat, court.lon);

  return (
    <Card className="basketballField">
      <CardMedia
        className="cardMedia"
        image={court.pic}
        title="basketball court"
      />
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
            <img
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
          href={"mailto:maxim@villivald.com"}
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
