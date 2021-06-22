import { connectToDatabase } from "../util/mongodb";

export default function Books({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <li>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>{book.url}</p>
        </li>
      ))}
    </ul>
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
