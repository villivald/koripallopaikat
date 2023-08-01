import Link from "next/link";
import Image from "next/image";

import { Link as MUILink, Typography, Card } from "@mui/material";

import newsData from "../data/newsData";

const News = () => {
  return (
    <Card className="newsCard">
      <Typography variant="h3" className="newsHeader">
        <Link href="/news" passHref>
          <MUILink className="newsHeaderText">News</MUILink>
        </Link>
      </Typography>
      <div className="newsList">
        {newsData.slice(0, 3).map((item) => (
          <p key={item.alt}>
            <p className="newsDate">{item.date}</p>
            <div className="newsContainer">
              <Image src={item.image} alt={item.alt} width="80" height="80" />
              <Typography color="textPrimary">
                <Link href={item.link} passHref>
                  <MUILink>{item.linkText}</MUILink>
                </Link>
                {item.text}
              </Typography>
            </div>
          </p>
        ))}
      </div>
    </Card>
  );
};

export default News;
