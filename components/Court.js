import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import PIC from "../public/vercel.svg";

const Court = ({ court }) => {
  return (
    <Card className="basketballField">
      <CardMedia
        style={{ height: 140 }}
        image={court.pic}
        title="basketball court"
      />
      <CardContent>
        <Image src={PIC} alt="Picture of the author" width={50} height={50} />
        <Typography color="textPrimary" gutterBottom>
          Address: {court.address}
        </Typography>
        <Typography color="textSecondary">
          Court surface: {court.surface}
        </Typography>
        <Typography color="textSecondary">
          Type of place: {court.type}
        </Typography>
        <Typography color="textSecondary">
          Number of baskets: {court.baskets}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={court.link}>
          Link
        </Button>
      </CardActions>
    </Card>
  );
};

export default Court;
