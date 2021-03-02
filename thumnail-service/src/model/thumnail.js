import mongoose from "mongoose";

const Schema = mongoose.Schema;

const thumSchema = new Schema({
  imageUrl: { type: String },
});

const Thum = mongoose.model("Thum", thumSchema);

export default Thum;
