import Link from "next/link";

import { Card, CardMedia, CardContent, Typography, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import TodayIcon from "@mui/icons-material/Today";

const StyledChip = styled(Chip)({
  backgroundColor: "#daca2e",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#051b2d",
});

import styles from "../css/News.module.css";

export default function NewsContainer({ item }) {
  return (
    <Card className={styles.newsCardContainer}>
      <CardMedia
        className={styles.newsCardImage}
        image={item.largeImage}
        title="news image"
      />
      <CardContent className={styles.newsCardContent}>
        <StyledChip icon={<TodayIcon />} label={item.date} />
        <Typography color="textPrimary">
          <Link href={item.link}>{item.linkText}</Link>
          {item.longText ? item.longText : item.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
