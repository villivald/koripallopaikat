import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteIntro from "../components/SiteIntro";
import Court from "../components/Court";

export default function Home({ courts }) {
  return (
    <div>
      <Head>
        <title>Koripallopaikat</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="monetization" content="$ilp.uphold.com/jzMkjAp8m9FZ" />
        <meta name="description" content="Helsingin koripallopaikat" />
      </Head>
      <Header />
      <SiteIntro />
      <div className="container">
        {courts.map((court) => (
          <Court court={court} key={court._id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const courts = await db.collection("paikat").find({}).toArray();

  return {
    props: {
      courts: JSON.parse(JSON.stringify(courts)),
    },
  };
}
