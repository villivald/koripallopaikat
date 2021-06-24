import Head from "next/head";
import { connectToDatabase } from "../util/mongodb";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteIntro from "../components/SiteIntro";
import Court from "../components/Court";

export default function Home({ books }) {
  return (
    <div>
      <Head>
        <title>Koripallopaikat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SiteIntro />
      <div className="container">
        {books.map((book) => (
          <Court book={book} key={book._id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const books = await db.collection("books").find({}).toArray();

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
  };
}
