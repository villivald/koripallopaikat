import React, { useState } from "react";
import Link from "next/link";
import MainPageCourt from "./MainPageCourt";
import mainPageCourts from "../data/mainPageCourts";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";

const main = () => {
  const router = useRouter();
  const [geo, setGeo] = useState(false);

  const handleClick = () => {
    setGeo(!geo);
    router.push("/");
  };

  return (
    <>
      {!geo && (
        <div className="geoLocation">
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            className="geoButton"
          >
            Use Geolocation
          </Button>
        </div>
      )}
      <div className="container">
        {mainPageCourts.map((court) => (
          <MainPageCourt court={court} key={court._id} geo={geo} />
        ))}
      </div>
      <div className="mainPageLink">
        <Link href={"/courts"}>Full List</Link>
      </div>
    </>
  );
};

export default main;
