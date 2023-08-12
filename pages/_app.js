import Router from "next/router";
import NProgress from "nprogress";

import "../css/index.css";
import "../css/court.css";
import "../css/search.css";
import "../css/map.css";
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
