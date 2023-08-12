import Image from "next/image";
import Head from "next/head";

import Header from "../components/Header";
import error from "../public/error.svg";

import styles from "../css/ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div>
      <Head>
        <title>Koripallopaikat - Page not found</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.errorPage}>
        <Image src={error} alt="404 page" width={600} height={600} />
      </div>
    </div>
  );
}
