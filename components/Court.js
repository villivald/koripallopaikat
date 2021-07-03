import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LinkIcon from "@material-ui/icons/Link";

const Court = ({ court }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Card className="basketballField">
      <CardMedia
        style={{ height: 140 }}
        image={court.pic}
        title="basketball court"
      />
      <CardContent>
        <Typography color="textPrimary" gutterBottom>
          Address: {court.address}
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
      <CardActions>
        <Button size="small" href={court.link}>
          <LinkIcon />
        </Button>
        <Button size="small" href={court.pic}>
          <ImageOutlinedIcon />
        </Button>
        <Button size="small" href={"mailto:maxim@villivald.com"}>
          <ReportOutlinedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Court;
