import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIcon from "@material-ui/icons/Home";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";
import PanToolIcon from "@material-ui/icons/PanTool";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListIcon from "@material-ui/icons/List";

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
        <Link href="/add">
          <a className={router.pathname == "/add" ? "active" : "linkContainer"}>
            <AddCircleIcon />
            Add
          </a>
        </Link>
        <Link href="/list">
          <a
            className={router.pathname == "/list" ? "active" : "linkContainer"}
          >
            <ListIcon />
            List
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
