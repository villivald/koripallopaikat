import React from "react";
import Image from "next/image";
import basket from "../public/blob.svg";

const SiteIntro = () => {
  return (
    <div className="intro">
      <h4 className="introText">
        <Image
          className="introImage"
          src={basket}
          width={90}
          height={90}
          alt="site logo"
        />
        Koripallopaikat <p className="spin">🏀</p>{" "}
      </h4>
    </div>
  );
};

export default SiteIntro;
