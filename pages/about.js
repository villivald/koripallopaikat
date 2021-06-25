import { connectToDatabase } from "../util/mongodb";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Books({ books }) {
  return (
    <div>
      <Header />
      <ul>
        {books.map((book) => (
          <li>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>{book.url}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const books = await db.collection("books").find({}).limit(20).toArray();

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
  };
}
