import Header from "../components/Header";
import Image from "next/image";
import react from "../public/icons/react.svg";
import telegram from "../public/icons/telegram.svg";
import twitter from "../public/icons/twitter.svg";
import linkedin from "../public/icons/linkedin-icon.svg";
import hashnode from "../public/icons/hashnode.svg";
import hackernoon from "../public/icons/hackernoon.svg";
import gmail from "../public/icons/gmail.svg";
import github from "../public/icons/github-icon.svg";
import dev from "../public/icons/dev-badge.svg";
import eleventy from "../public/icons/11ty.webp";

export default function Top({ weather }) {
  return (
    <div>
      <Header />
      <div className="contactsContainer">
        {weather && (
          <div>
            <h1>{weather.name}</h1>
            <h2>{(weather.main.temp - 273.15).toFixed(2)} °​C</h2>
          </div>
        )}
      </div>

      <div className="contactsContainer">
        <div className="link">
          <a href="https://villivald.com" className="linkContainer">
            <Image alt="react logo" src={react} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://create-react-app.com" className="linkContainer">
            <Image alt="eleventy logo" src={eleventy} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://github.com/villivald" className="linkContainer">
            <Image alt="git logo" src={github} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://twitter.com/crapp_blog" className="linkContainer">
            <Image alt="twitter logo" src={twitter} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://dev.to/villivald" className="linkContainer">
            <Image alt="dev.to logo" src={dev} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a
            href="https://hackernoon.com/u/villivald"
            className="linkContainer"
          >
            <Image
              alt="hackernoon logo"
              src={hackernoon}
              width={58}
              height={58}
            />
          </a>
        </div>
        <div className="link">
          <a href="https://proj.ninja" className="linkContainer">
            <Image alt="hashnode logo" src={hashnode} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a
            href="https://www.linkedin.com/in/maxim-villivald-4b1b311a3/"
            className="linkContainer"
          >
            <Image alt="linkedin logo" src={linkedin} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="https://t.me/create_react_app" className="linkContainer">
            <Image alt="telegram logo" src={telegram} width={58} height={58} />
          </a>
        </div>
        <div className="link">
          <a href="mailto:maxim@villivald@com" className="linkContainer">
            <Image alt="gmail logo" src={gmail} width={58} height={58} />
          </a>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${process.env.API_KEY}`
  );
  const weather = await res.json();

  return {
    props: {
      weather,
    },
  };
};
