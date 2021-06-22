import { connectToDatabase } from "../util/mongodb";

export default function Top({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li>
          <h2>{book.title}</h2>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const books = await db.collection("books").find({}).limit(1000).toArray();

  return {
    props: {
      books: JSON.parse(JSON.stringify(books)),
    },
  };
}
