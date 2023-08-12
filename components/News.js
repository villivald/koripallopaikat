import Link from "next/link";
import Image from "next/image";

import { Typography, Card } from "@mui/material";

import newsData from "../data/newsData";

import styles from "../css/News.module.css";

export default function News() {
  return (
    <Card className={styles.newsCard}>
      <Typography variant="h3" className={styles.newsHeader}>
        <Link href="/news" passHref className={styles.newsHeaderText}>
          News
        </Link>
      </Typography>
      <div className={styles.newsList}>
        {newsData.slice(0, 6).map((item) => (
          <div key={item.alt}>
            <p className={styles.newsDate}>{item.date}</p>
            <div className={styles.newsContainer}>
              <Image src={item.image} alt={item.alt} width="110" height="110" />
              <Typography color="textPrimary">
                <Link href={item.link} passHref>
                  {item.linkText}
                </Link>
                {item.text}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
