import { connectToDatabase } from "../../util/mongodb";

export default async function handler(req, res) {
  const { method } = req;

  const { db } = await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        const courts = await db.collection("paikat").find({}).toArray();
        res.status(200).json({ success: true, data: courts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
