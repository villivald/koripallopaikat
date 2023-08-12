import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LinkIcon from "@mui/icons-material/Link";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

import styles from "../css/Main.module.css";

export default function Court({ court }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <Card className={styles.basketballFieldMain}>
      <Link
        key={court._id}
        href="/courts/[id]"
        as={`/courts/${court.address}`}
        passHref
      >
        <Image
          className={styles.mainPageCardMedia}
          src={`https://koripallopaikat.com/koripallopaikat/${court.pic}.webp`}
          width={300}
          height={200}
          alt={court.address}
        />
      </Link>
      <CardContent>
        <Typography color="textPrimary">
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
          Surface: {court.surface}{" "}
          <span
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            style={{ cursor: "pointer" }}
          >
            ⚡️
          </span>
        </Typography>
        {isShown && (
          <div className={styles.hoverPictureContainer}>
            <Image
              src={court.surfacePic}
              alt="court surface"
              width={150}
              height={150}
              className={styles.hoverPicture}
            />
          </div>
        )}
        <Typography color="textSecondary">Place: {court.type}</Typography>
        <Typography color="textSecondary">Baskets: {court.baskets}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={court.link}
          aria-label="court link"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <LinkIcon className={styles.iconLink} />
        </Button>
        <Button
          size="small"
          href={`https://koripallopaikat.com/koripallopaikat/${court._id}.webp`}
          aria-label="court image"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <ImageOutlinedIcon className={styles.iconLink} />
        </Button>
        <Button
          size="small"
          href={`https://www.google.com/maps/place/${court.address}+Helsinki`}
          aria-label="google maps"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <RoomOutlinedIcon className={styles.iconLink} />
        </Button>
        <Button
          size="small"
          href={`mailto:koripallopaikat@gmail.com?subject=Issue%20with%20${court.address}%20court&body=Description%20of%20an%20issue:%20`}
          aria-label="report"
          title="Open in new tab"
          target="_blank"
          rel="noopener"
        >
          <ReportOutlinedIcon className={styles.iconLink} />
        </Button>
      </CardActions>
    </Card>
  );
}
