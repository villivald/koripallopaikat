import "../css/index.css";
import "../css/main.css";
import "../css/court.css";
import "../css/header.css";
import "../css/footer.css";
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
import "mapbox-gl/dist/mapbox-gl.css";

import Router from "next/router";
import NProgress from "nprogress";
import "../css/nprogress.css";
import { AppWrapper } from "../context/state";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
