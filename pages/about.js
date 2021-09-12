import Link from "@material-ui/core/Link";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import lighthouse from "../public/lighthouse.webp";
import aboutLinks from "../data/aboutLinks";

export default function Books() {
  return (
    <div>
      <Head>
        <title>Koripallopaikat - About</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className="aboutWrapper">
        <div className="aboutProjectContainer">
          <h1 className="projectInfoHeader">Project info</h1>
          <p>
            Made by <Link href="https://github.com/villivald/">villivald</Link>
          </p>
          <p>
            Inspired by{" "}
            <Link href="https://www.nba.com/player/1627936/alex_caruso">
              GOAT
            </Link>
          </p>
        </div>
        <div className="aboutTechContainer">
          <h1 className="techInfoHeader">Tech info</h1>
          <h2>
            App live on <Link href="https://koripallopaikat.com/">Vercel</Link>
          </h2>
          <h2>
            Source Code on{" "}
            <Link href="https://github.com/villivald/koripallopaikat">
              GitHub
            </Link>
          </h2>

          <div class="apiDockerLinks">
            <h2>
              <Link href="/api/savedCourts">API</Link>
            </h2>

            <h2>
              <Link href="https://github.com/villivald/DevOps-with-Docker/blob/main/Part_1/15/15.md">
                Docker
              </Link>
            </h2>
          </div>

          <h2>Made with:</h2>
          <div className="aboutLinks">
            {aboutLinks.map((link) => (
              <Link href={link.link}>{link.text}</Link>
            ))}
          </div>

          <Image
            src={lighthouse}
            alt="lighthouse"
            width="350px"
            height="124px"
          />
        </div>
      </div>
    </div>
  );
}
