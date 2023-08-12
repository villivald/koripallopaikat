import Link from "next/link";
import Image from "next/image";

import { Typography, Card } from "@mui/material";

import newsData from "../data/newsData";

const News = () => {
  return (
    <Card className="newsCard">
      <Typography variant="h3" className="newsHeader">
        <Link href="/news" passHref className="newsHeaderText">
          News
        </Link>
      </Typography>
      <div className="newsList">
        {newsData.slice(0, 6).map((item) => (
          <div key={item.alt}>
            <p className="newsDate">{item.date}</p>
            <div className="newsContainer">
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
};

export default News;
