import React from "react";
import Link from "next/link";
import MainPageCourt from "./MainPageCourt";
import mainPageCourts from "../data/mainPageCourts";

const main = () => {
  return (
    <>
      <div className="container">
        {mainPageCourts.map((court) => (
          <MainPageCourt court={court} key={court._id} />
        ))}
      </div>
      <div className="mainPageLink">
        <Link href={"/courts"}>Full List</Link>
      </div>
    </>
  );
};

export default main;
