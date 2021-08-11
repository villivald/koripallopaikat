import Header from "../components/Header";
import Image from "next/image";
import Head from "next/head";
import react from "../public/icons/react.svg";
import telegram from "../public/icons/telegram.svg";
import twitter from "../public/icons/twitter.svg";
import hashnode from "../public/icons/hashnode.svg";
import hackernoon from "../public/icons/hackernoon.svg";
import gmail from "../public/icons/gmail.svg";
import github from "../public/icons/github-icon.svg";
import dev from "../public/icons/dev-badge.svg";
import eleventy from "../public/icons/11ty.webp";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Koripallopaikat - Contact</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <h1 className="contactHeader">Contact</h1>
      <div className="contactsContainer">
        <div className="link">
          <a href="https://villivald.com" className="contactLink">
            <Image alt="react logo" src={react} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://create-react-app.com" className="contactLink">
            <Image alt="eleventy logo" src={eleventy} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://github.com/villivald" className="contactLink">
            <Image alt="git logo" src={github} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://twitter.com/crapp_blog" className="contactLink">
            <Image alt="twitter logo" src={twitter} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://dev.to/villivald" className="contactLink">
            <Image alt="dev.to logo" src={dev} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://hackernoon.com/u/villivald" className="contactLink">
            <Image
              alt="hackernoon logo"
              src={hackernoon}
              width={58}
              height={58}
            />
          </a>
        </div>
        <div className="link">
          <a href="https://proj.ninja" className="contactLink">
            <Image alt="hashnode logo" src={hashnode} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://t.me/create_react_app" className="contactLink">
            <Image alt="telegram logo" src={telegram} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="mailto:koripallopaikat@gmail.com" className="contactLink">
            <Image alt="gmail logo" src={gmail} width={58} height={58} />
          </a>
        </div>
      </div>
    </>
  );
}
