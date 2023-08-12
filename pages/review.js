import Head from "next/head";

import Header from "../components/Header";
import Court from "../models/Court";
import CourtInReview from "../components/CourtInReview";

import dbConnect from "../util/dbConnect";

import styles from "../css/Review.module.css";

export default function InReview({ courtsInReview }) {
  return (
    <div>
      <Head>
        <title>Koripallopaikat - In Review</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.reviewBlob}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width="300"
        >
          <g>
            <path
              fill="#82C99B"
              d="M43,-45.6C54.8,-41.3,63,-26.9,65.6,-11.6C68.1,3.6,65.2,19.8,55.2,26.8C45.1,33.8,27.9,31.7,15.9,30.4C3.8,29,-3.2,28.4,-18.8,31.5C-34.4,34.5,-58.7,41.2,-73.2,33.7C-87.7,26.3,-92.3,4.6,-83.2,-9.1C-74.2,-22.8,-51.4,-28.4,-35.2,-32C-19.1,-35.6,-9.5,-37,3,-40.6C15.6,-44.2,31.1,-49.9,43,-45.6Z"
              transform="translate(100 100)"
            />
            <text
              x="20"
              y="107"
              fontSize="1.2rem"
              fontWeight="bold"
              className={styles.reviewBlobText}
            >
              Courts in Review
            </text>
          </g>
        </svg>
      </div>
      <div className={styles.reviewContainer}>
        {courtsInReview.map((court) => (
          <CourtInReview court={court} key={court._id} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const paikat = await Court.find({});

  return {
    props: {
      courtsInReview: JSON.parse(JSON.stringify(paikat)),
    },
  };
}
