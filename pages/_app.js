import Router from "next/router";
import { Analytics } from "@vercel/analytics/react";
import NProgress from "nprogress";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar";

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
import "../css/news.css";
import "../css/app.css";
import "../css/nprogress.css";
import "mapbox-gl/dist/mapbox-gl.css";

import RenderResults from "../util/kbar";
import actions from "../util/kbarActions";
import { AppWrapper } from "../context/state";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator className="kbarContainer">
            <KBarSearch className="kbarInput" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      <AppWrapper>
        <Component {...pageProps} />
        <Analytics />
      </AppWrapper>
    </KBarProvider>
  );
}
