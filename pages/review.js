import Head from "next/head";
import Header from "../components/Header";
import dbConnect from "../util/dbConnect";
import Court from "../models/Court";
import CourtInReview from "../components/CourtInReview";

const InReview = ({ courtsInReview }) => {
  return (
    <div>
      <Head>
        <title>Koripallopaikat - In Review</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className="reviewContainer">
        {courtsInReview.map((court) => (
          <CourtInReview court={court} key={court._id} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  await dbConnect();
  const paikat = await Court.find({});

  return {
    props: {
      courtsInReview: JSON.parse(JSON.stringify(paikat)),
    },
  };
}

export default InReview;
