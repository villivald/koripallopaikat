import Router from "next/router";
import NProgress from "nprogress";

import "../css/index.css";
import "../css/main.css";
import "../css/court.css";
import "../css/header.css";
import "../css/siteintro.css";
import "../css/404.css";
import "../css/about.css";
import "../css/add.css";
import "../css/map.css";
import "../css/contact.css";
import "../css/id.css";
import "../css/weather.css";
import "../css/search.css";
import "../css/review.css";
import "../css/news.css";
import "../css/nprogress.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { AppContext } from "../context";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={pageProps}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
