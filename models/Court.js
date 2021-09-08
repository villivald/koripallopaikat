import mongoose from "mongoose";

const CourtSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "Please provide an address"],
  },
  surface: {
    type: String,
  },
  type: {
    type: String,
  },
  baskets: {
    type: Number,
    required: [true, "Please provide the amount of baskets."],
  },
  pic: {
    type: String,
    required: [true, "Please provide an image url."],
  },
  link: {
    type: String,
  },
  credentials: {
    type: String,
  },
});

export default mongoose.models.Court || mongoose.model("Court", CourtSchema);
