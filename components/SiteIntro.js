import React from "react";
import Image from "next/image";
import Link from "next/link";
import basket from "../public/blob.svg";

const SiteIntro = () => {
  return (
    <div className="intro">
      <Link href="https://villivald.com">
        <img
          src="https://villivald.com/static/media/dc2.d57757c1.webp"
          alt="court surface"
          width={200}
          height={150}
          className="cat"
        />
      </Link>
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
