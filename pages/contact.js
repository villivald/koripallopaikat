import { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import react from "../public/icons/react.svg";
import telegram from "../public/icons/telegram.svg";
import twitter from "../public/icons/twitter.svg";
import facebook from "../public/icons/facebook.svg";
import hashnode from "../public/icons/hashnode.svg";
import hackernoon from "../public/icons/hackernoon.svg";
import gmail from "../public/icons/gmail.svg";
import github from "../public/icons/github-icon.svg";
import dev from "../public/icons/dev-badge.svg";
import eleventy from "../public/icons/11ty.webp";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [visible, setVisible] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    fetch("https://koripallopaikat.com/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    });

    setVisible(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setVisible(false);
    }, 10000);
  };
  return (
    <>
      <Head>
        <title>Koripallopaikat - Contact</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className="contactBlob">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
        >
          <g>
            <path
              fill="#82C99B"
              d="M38.2,-40.7C54.5,-31.7,76.4,-24.5,83.2,-11C89.9,2.5,81.5,22.4,68,33C54.4,43.5,35.6,44.8,19.7,48C3.8,51.1,-9.2,56.1,-22.4,54.4C-35.6,52.7,-49.1,44.4,-61.3,31.4C-73.4,18.4,-84.4,0.8,-79.5,-11.8C-74.6,-24.4,-53.9,-31.9,-38,-41C-22.1,-50,-11,-60.6,-0.1,-60.5C10.9,-60.4,21.8,-49.7,38.2,-40.7Z"
              transform="translate(100 100)"
            />
            <text x="60" y="110" font-size="1.6rem">
              Contact
            </text>
          </g>
        </svg>
      </div>
      <h2 className="contactHeader">Connect with me on social 👋</h2>
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
          <a
            href="https://www.facebook.com/koripallopaikat"
            className="contactLink"
          >
            <Image alt="facebook logo" src={facebook} width={58} height={58} />
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
      <h2 className="contactHeader">Or send an email ✉️</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            ></TextField>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            ></TextField>
            <TextareaAutosize
              placeholder="Message"
              value={message}
              minRows={5}
              onChange={(e) => setMessage(e.target.value)}
            ></TextareaAutosize>
            <Button
              startIcon={<SendIcon />}
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
      {visible && (
        <>
          <h2 className="successHeader">
            Thank you for your message 👋. I will get back to you as soon as
            possible.
          </h2>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Success!
            </Alert>
          </Snackbar>
        </>
      )}
    </>
  );
}
