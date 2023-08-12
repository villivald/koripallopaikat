import Head from "next/head";

import Header from "../components/Header";
import newsData from "../data/newsData";
import NewsContainer from "../components/NewsContainer";

import styles from "../css/News.module.css";

export default function News() {
  return (
    <div>
      <Head>
        <title>Koripallopaikat - News</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.newsBlob}>
        <svg
          viewBox="0 0 200 200"
          width="250"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fill="#82c89b"
              d="M38.2,-40.7C54.5,-31.7,76.4,-24.5,83.2,-11C89.9,2.5,81.5,22.4,68,33C54.4,43.5,35.6,44.8,19.7,48C3.8,51.1,-9.2,56.1,-22.4,54.4C-35.6,52.7,-49.1,44.4,-61.3,31.4C-73.4,18.4,-84.4,0.8,-79.5,-11.8C-74.6,-24.4,-53.9,-31.9,-38,-41C-22.1,-50,-11,-60.6,-0.1,-60.5C10.9,-60.4,21.8,-49.7,38.2,-40.7Z"
              transform="translate(100 100)"
            />
            <text x="75" y="107" fontSize="1.2rem" fontWeight="bold">
              News
            </text>
          </g>
        </svg>
      </div>
      <div className={styles.newsPageContainer}>
        {newsData.map((item) => (
          <NewsContainer item={item} key={item.alt} />
        ))}
      </div>
    </div>
  );
}
