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

import "mapbox-gl/dist/mapbox-gl.css";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  KBarResults,
  useMatches,
  NO_GROUP,
} from "kbar";
import { useMemo } from "react";

import Router from "next/router";
import NProgress from "nprogress";
import "../css/nprogress.css";
import { AppWrapper } from "../context/state";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const RenderResults = () => {
  const groups = useMatches();
  const flattened = useMemo(
    () =>
      groups.reduce((acc, curr) => {
        acc.push(curr.name);
        acc.push(...curr.actions);
        return acc;
      }, []),
    [groups]
  );

  return (
    <KBarResults
      items={flattened.filter((i) => i !== NO_GROUP)}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>Navigation</div>
        ) : (
          <div className={`kbar ${active ? "activeBar" : ""}`}>
            <div className="kbar-item">
              {item.name}
              <p>{item.keywords}</p>
            </div>
            <span>{item.shortcut}</span>
          </div>
        )
      }
    />
  );
};

export default function MyApp({ Component, pageProps }) {
  const actions = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home page",
      perform: () => (window.location.pathname = "/"),
    },
    {
      id: "blog",
      name: "Map",
      shortcut: ["b"],
      keywords: "courts on map",
      perform: () => (window.location.pathname = "map"),
    },
    {
      id: "list",
      name: "List",
      shortcut: ["l"],
      keywords: "full list of courts",
      perform: () => (window.location.pathname = "courts"),
    },
    {
      id: "search",
      name: "Search",
      shortcut: ["s"],
      keywords: "search court (filter, sort)",
      perform: () => (window.location.pathname = "search"),
    },
    {
      id: "add",
      name: "Add",
      shortcut: ["a"],
      keywords: "add new court",
      perform: () => (window.location.pathname = "add"),
    },
    {
      id: "contact",
      name: "Contact",
      shortcut: ["c"],
      keywords: "contact (email, social, support)",
      perform: () => (window.location.pathname = "contact"),
    },
  ];
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
      </AppWrapper>
    </KBarProvider>
  );
}
