import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@material-ui/icons/Home";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";
import PanToolIcon from "@material-ui/icons/PanTool";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <nav>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : "linkContainer"}>
            <HomeIcon />
            Home
          </a>
        </Link>
        <Link href="/map">
          <a className={router.pathname == "/map" ? "active" : "linkContainer"}>
            <MapIcon />
            Map
          </a>
        </Link>
        <Link href="/about">
          <a
            className={router.pathname == "/about" ? "active" : "linkContainer"}
          >
            <InfoIcon />
            About
          </a>
        </Link>
        <Link href="/add">
          <a className={router.pathname == "/add" ? "active" : "linkContainer"}>
            <AddCircleIcon />
            Add
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={
              router.pathname == "/contact" ? "active" : "linkContainer"
            }
          >
            <PanToolIcon />
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
