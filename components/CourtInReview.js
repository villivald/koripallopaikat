import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import styles from "../css/Review.module.css";

export default function CourtInReview({ court }) {
  return (
    <Card className={styles.reviewField}>
      <CardMedia
        className={styles.cardMedia}
        image={court.pic}
        title="basketball court"
      />
      <CardContent>
        <Typography color="textPrimary">
          <span>{court.address}</span>
        </Typography>
        <Typography color="textSecondary">
          <span>Surface:</span> <span>{court.surface}</span>
        </Typography>
        <Typography color="textSecondary">
          <span>Place: </span>
          <span>{court.type}</span>
        </Typography>
        <Typography color="textSecondary">Baskets: {court.baskets}</Typography>
      </CardContent>
    </Card>
  );
}
