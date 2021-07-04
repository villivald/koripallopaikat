import React from "react";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ListCourt = ({ court }) => {
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
        <Typography color="textSecondary" className="capital">
          {court.surface}
        </Typography>
        <Typography color="textSecondary" className="capital">
          {court.type}
        </Typography>
        <Typography color="textSecondary" className="capital">
          {court.baskets} {court.baskets === 1 ? "basket" : "baskets"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListCourt;
