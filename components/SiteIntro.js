import Image from "next/image";
import Link from "next/link";

import basket from "../public/blob.svg";
import basketball from "../public/basketball.svg";
import cat from "../public/cat.webp";

const SiteIntro = () => {
  return (
    <div className="intro">
      <div className="toolTipCat">
        <Link href="https://villivald.com" passHref>
          <Image
            src={cat}
            alt="cat logo"
            width={200}
            height={150}
            className="cat"
          />
        </Link>
        <Link href="https://villivald.com" passHref>
          <span className="toolTipText">
            Psst, Hey You. Wanna see where I came from?{" "}
          </span>
        </Link>
      </div>
      <h4 className="introText">
        <Image
          className="introImage"
          src={basket}
          width={90}
          height={90}
          alt="site logo"
        />
        Koripallopaikat{" "}
        <p className="spin">
          <Image
            className="introImage"
            src={basketball}
            width={35}
            height={35}
            alt="picture of basketball"
          />
        </p>{" "}
      </h4>
    </div>
  );
};

export default SiteIntro;
