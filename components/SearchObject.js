import Link from "next/link";

import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function SearchObject({ court }) {
  return (
    <Card className="searchObjectField" elevation={0}>
      <Link
        key={court._id}
        href="/courts/[id]"
        as={`/courts/${court.address}`}
        passHref
      >
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
            {court.address}
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
        <Typography color="textSecondary" className="courtSurface">
          {court.surface}
        </Typography>
      </CardContent>
    </Card>
  );
}
