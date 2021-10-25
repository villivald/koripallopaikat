import Card from "@material-ui/core/Card";
import Link from "next/link";
import Image from "next/image";
import { Link as MUILink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
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
        {newsData.map((item) => (
          <p key={item.alt}>
            <h5 className="newsDate">{item.date}</h5>
            <div className="newsContainer">
              <Image src={item.image} alt={item.alt} width="80" height="80" />
              <Typography color="textPrimary">
                <Link href={item.link}>{item.linkText}</Link>
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
