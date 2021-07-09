import dynamic from "next/dynamic";
import Head from "next/head";

const Header = dynamic(() => import("../components/Header"));
const SiteIntro = dynamic(() => import("../components/SiteIntro"));
const Main = dynamic(() => import("../components/Main"));

const Home = () => {
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
};

export default Home;
