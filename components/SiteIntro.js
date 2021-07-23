import React from "react";
import Image from "next/image";
import basket from "../public/basket.svg";

const SiteIntro = () => {
  return (
    <div className="intro">
      <h4 className="introText">
        <Image src={basket} width={60} height={60} />
        Koripallopaikat <p className="spin">🏀</p>{" "}
      </h4>
    </div>
  );
};

export default SiteIntro;
