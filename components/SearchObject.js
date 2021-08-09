import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SearchObject = ({ court }) => {
  return (
    <Card className="searchObjectField" elevation={0}>
      <CardMedia
        className="searchCardMedia"
        image={court.searchPic}
        title="basketball court"
      />
      <CardContent>
        <Typography color="textPrimary" gutterBottom className="searchLink">
          <Link
            key={court._id}
            href="/courts/[id]"
            as={`/courts/${court.address}`}
          >
            {court.address}
          </Link>
        </Typography>
        <Typography color="textSecondary">
          {court.baskets === 1
            ? `${court.baskets} basket`
            : `${court.baskets} baskets`}
        </Typography>
        <Typography color="textSecondary" className="basketNumber">
          {court.surface}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SearchObject;
