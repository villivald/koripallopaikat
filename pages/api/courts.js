import dbConnect from "../../util/dbConnect";
import Court from "../../models/Court";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const paikat = await Court.find({});
        res.status(200).json({ success: true, data: paikat });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const court = await Court.create(req.body);
        res.status(201).json({ success: true, data: court });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
