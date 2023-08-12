import Head from "next/head";
import Image from "next/image";

import { Link, Typography } from "@mui/material";

import Header from "../components/Header";
import lighthouse from "../public/lighthouse.webp";
import aboutLinks from "../data/aboutLinks";

import styles from "../css/About.module.css";

export default function Books() {
  return (
    <div>
      <Head>
        <title>Koripallopaikat - About</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutProjectContainer}>
          <h1 className={styles.projectInfoHeader}>Project info</h1>
          <Typography className={styles.projectText} variant="subtitle1">
            <span className={styles.projectTextHighlight}>Koripallopaikat</span>{" "}
            is a curated collection of public basketball courts in Finland. We
            started from the Helsinki Metropolitan Area and now we have courts
            from 7 different cities including Turku and Tampere. Feel free to{" "}
            <Link href="https://koripallopaikat.com/add">submit</Link> your
            local court.
          </Typography>
          <section className={styles.projectLinks}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              className={styles.aboutBlob}
            >
              <g>
                <path
                  fill="#82c99b"
                  d="M50.8,-58.7C61.4,-51.7,62.5,-31.4,64.7,-12.4C66.9,6.7,70.2,24.5,64.2,39C58.1,53.4,42.8,64.4,25.3,71.6C7.9,78.8,-11.7,82.3,-28.9,77.1C-46.1,71.8,-61,57.8,-70.3,40.9C-79.7,24.1,-83.5,4.3,-77.5,-10.9C-71.5,-26.1,-55.7,-36.8,-41.1,-43.2C-26.6,-49.5,-13.3,-51.6,3.4,-55.6C20.1,-59.7,40.2,-65.8,50.8,-58.7Z"
                  transform="translate(100 100)"
                />
                <text x="23" y="110">
                  Made by <Link href="https://villivald.com">villivald</Link> 👨‍🏫
                </text>
              </g>
            </svg>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              className={styles.aboutBlob}
            >
              <g>
                <path
                  fill="#82c99b"
                  d="M43,-45.6C54.8,-41.3,63,-26.9,65.6,-11.6C68.1,3.6,65.2,19.8,55.2,26.8C45.1,33.8,27.9,31.7,15.9,30.4C3.8,29,-3.2,28.4,-18.8,31.5C-34.4,34.5,-58.7,41.2,-73.2,33.7C-87.7,26.3,-92.3,4.6,-83.2,-9.1C-74.2,-22.8,-51.4,-28.4,-35.2,-32C-19.1,-35.6,-9.5,-37,3,-40.6C15.6,-44.2,31.1,-49.9,43,-45.6Z"
                  transform="translate(100 100)"
                />
                <text x="20" y="110">
                  Inspired by{" "}
                  <Link href="https://www.nba.com/player/1627936/alex_caruso">
                    GOAT
                  </Link>{" "}
                  👴
                </text>
              </g>
            </svg>
          </section>
          <section>
            <Typography className={styles.projectText} variant="subtitle1">
              If you like this project, you can support it by giving it a star
              on{" "}
              <Link href="https://github.com/villivald/koripallopaikat">
                GitHub
              </Link>{" "}
              ⭐️ or{" "}
              <Link href="https://www.buymeacoffee.com/villivald">
                buying me a coffee
              </Link>{" "}
              ☕️.
            </Typography>
          </section>
        </div>
        <div className={styles.aboutTechContainer}>
          <h1 className={styles.techInfoHeader}>Tech info</h1>
          <h2 className={styles.techInfoSubHeader}>
            App live on <Link href="https://koripallopaikat.com/">Vercel</Link>
          </h2>
          <h2 className={styles.techInfoSubHeader}>
            Source Code on{" "}
            <Link href="https://github.com/villivald/koripallopaikat">
              GitHub
            </Link>
          </h2>

          <div className={styles.apiDockerLinks}>
            <h2 className={styles.techInfoSubHeader}>
              <Link href="/api/savedCourts">API</Link>
            </h2>

            <h2 className={styles.techInfoSubHeader}>
              <Link href="https://github.com/villivald/DevOps-with-Docker/blob/main/Part_1/15/15.md">
                Docker
              </Link>
            </h2>
          </div>

          <h2 className={styles.techInfoSubHeader}>Made with:</h2>
          <div className={styles.aboutLinks}>
            {aboutLinks.map((link) => (
              <Link key={link.text} href={link.link}>
                {link.text}
              </Link>
            ))}
          </div>

          <Image
            src={lighthouse}
            alt="lighthouse score: Performance = 97, A11 = 100, Best Practices = 100, SEO = 100"
            width={350}
            height={124}
          />
        </div>
      </div>
    </div>
  );
}
