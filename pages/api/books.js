import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const books = await db.collection("books").find({}).toArray();
  res.json(books);
};
