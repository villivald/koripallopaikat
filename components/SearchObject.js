import Link from "next/link";
import {
  Link as MUILink,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const SearchObject = ({ court }) => {
  return (
    <Card className="searchObjectField" elevation={0}>
      <Link key={court._id} href="/courts/[id]" as={`/courts/${court.address}`}>
        <CardMedia
          className="searchCardMedia"
          image={court.searchPic}
          title="basketball court"
        />
      </Link>
      <CardContent>
        <Typography color="textPrimary" className="searchLink">
          <Link
            key={court._id}
            href="/courts/[id]"
            as={`/courts/${court.address}`}
            passHref
          >
            <MUILink>{court.address}</MUILink>
          </Link>
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          {court.district}
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
