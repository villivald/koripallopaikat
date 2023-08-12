import Image from "next/image";
import Link from "next/link";

import basket from "../public/blob.svg";
import basketball from "../public/basketball.svg";
import cat from "../public/cat.webp";

import styles from "../css/Siteintro.module.css";

export default function SiteIntro() {
  return (
    <div className={styles.intro}>
      <div className={styles.toolTipCat}>
        <Link href="https://villivald.com" passHref>
          <Image
            src={cat}
            alt="cat logo"
            width={200}
            height={150}
            className={styles.cat}
          />
        </Link>
        <Link href="https://villivald.com" passHref>
          <span className={styles.toolTipText}>
            Psst, Hey You. Wanna see where I came from?{" "}
          </span>
        </Link>
      </div>
      <h4 className={styles.introText}>
        <Image
          className={styles.introImage}
          src={basket}
          width={90}
          height={90}
          alt="site logo"
        />
        Koripallopaikat{" "}
        <p className={styles.spin}>
          <Image
            className={styles.introImage}
            src={basketball}
            width={35}
            height={35}
            alt="picture of basketball"
          />
        </p>{" "}
      </h4>
    </div>
  );
}
