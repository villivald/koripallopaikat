import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";

const Header = dynamic(() => import("../components/Header"));
const SiteIntro = dynamic(() => import("../components/SiteIntro"));
const Main = dynamic(() => import("../components/Main"));
const Weather = dynamic(() => import("../components/Weather"));

const Home = () => {
  return (
    <div>
      <Head>
        <title>Koripallopaikat - Home page</title>
        <link rel="icon" href="favicons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A curated collection of public basketball courts in the Helsinki Metropolitan Area. Everyone is welcome to submit their local court."
        />
      </Head>
      <Header />
      <SiteIntro />
      <Weather />
      <Main />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-203458424-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-203458424-1');
        `}
      </Script>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${process.env.API_KEY}`
  );
  const weather = await res.json();

  return {
    props: {
      weather,
    },
  };
};

export default Home;
