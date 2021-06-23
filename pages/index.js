import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { connectToDatabase } from "../util/mongodb";
import PIC from "../public/vercel.svg";

export default function Home({ books }) {
  return (
    <div>
      <Head>
        <title>Koripallopaikat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/books">
            <a>About</a>
          </Link>
          <Link href="/top">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      <div className="container">
        {books.map((book) => (
          <div key={book._id} className="basketballField">
            {/* <Image
              src={PIC}
              alt="Picture of the author"
              width={50}
              height={50}
            /> */}
            <img
              src="http://placekitten.com/150/150"
              width={150}
              height={150}
            />
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
            <a href={book.url}>Link</a>
          </div>
        ))}
      </div>

      <footer>I`m here to stay</footer>
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
