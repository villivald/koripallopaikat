import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const CourtInReview = ({ court }) => {
  return (
    <Card className="basketballField">
      <CardMedia
        className="cardMedia"
        image={court.pic}
        title="basketball court"
      />
      <CardContent>
        <Typography color="textPrimary">
          <span className="cardText">{court.address}</span>
        </Typography>
        <Typography color="textSecondary">
          <span className="cardTitle">Surface:</span>{" "}
          <span className="cardText">{court.surface}</span>
        </Typography>
        <Typography color="textSecondary">
          <span className="cardTitle">Place: </span>
          <span className="cardText">{court.type}</span>
        </Typography>
        <Typography color="textSecondary" className="courtBaskets">
          Baskets: {court.baskets}
        </Typography>
        <Typography color="textSecondary" className="courtBasketsMobile">
          {court.baskets > 1
            ? `${court.baskets} baskets`
            : `${court.baskets} basket`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CourtInReview;
