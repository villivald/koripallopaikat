import Head from "next/head";
import Header from "../components/Header";
import SiteIntro from "../components/SiteIntro";
import Main from "../components/Main";

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
      <Main />
    </div>
  );
}
