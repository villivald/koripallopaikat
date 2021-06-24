import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import PIC from "../public/vercel.svg";

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const Court = ({ book }) => {
  const classes = useStyles();

  return (
    <Card className="basketballField">
      <CardMedia
        className={classes.media}
        image="http://placekitten.com/400/400"
        title="Paella dish"
      />
      <CardContent>
        <Image src={PIC} alt="Picture of the author" width={50} height={50} />
        <Typography color="textPrimary" gutterBottom>
          Adress: {book.title}
        </Typography>
        <Typography color="textSecondary">
          Court surface: {book.author}
        </Typography>
        <Typography color="textSecondary">
          Type of place: {book.author}
        </Typography>
        <Typography color="textSecondary">
          Number of baskets: {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="http://google.com">
          Link
        </Button>
      </CardActions>
    </Card>
  );
};

export default Court;
