import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PanToolOutlinedIcon from "@material-ui/icons/PanToolOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListIcon from "@material-ui/icons/List";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const router = useRouter();
  return (
    <header>
      <nav>
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : "linkContainer"}>
            <HomeOutlinedIcon />
            Home
          </a>
        </Link>
        <Link href="/map">
          <a className={router.pathname == "/map" ? "active" : "linkContainer"}>
            <MapOutlinedIcon />
            Map
          </a>
        </Link>
        <Link href="/courts">
          <a
            className={
              router.pathname == "/courts" ? "active" : "linkContainer"
            }
          >
            <ListIcon />
            List
          </a>
        </Link>
        <Link href="/search">
          <a
            className={
              router.pathname == "/search" ? "active" : "linkContainer"
            }
          >
            <SearchIcon />
            Search
          </a>
        </Link>
        <Link href="/add">
          <a className={router.pathname == "/add" ? "active" : "linkContainer"}>
            <AddCircleOutlineIcon />
            Add
          </a>
        </Link>
        <Link href="/about">
          <a
            className={router.pathname == "/about" ? "active" : "linkContainer"}
          >
            <InfoOutlinedIcon />
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={
              router.pathname == "/contact" ? "active" : "linkContainer"
            }
          >
            <PanToolOutlinedIcon />
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
