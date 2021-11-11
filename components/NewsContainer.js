import Link from "next/link";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TodayIcon from "@material-ui/icons/Today";

const StyledChip = styled(Chip)({
  backgroundColor: "#daca2e",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#051b2d",
});

const NewsContainer = ({ item }) => {
  return (
    <Card className="newsCardContainer">
      <CardMedia
        className="newsCardImage"
        image={item.largeImage}
        title="news image"
      />
      <CardContent className="newsCardContent">
        <StyledChip icon={<TodayIcon />} label={item.date} />
        <Typography color="textPrimary">
          <Link href={item.link}>{item.linkText}</Link>
          {item.longText ? item.longText : item.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsContainer;
