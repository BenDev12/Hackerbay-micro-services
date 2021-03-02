import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patcSchema = new Schema({
  data: { type: String },
});

const Patch = mongoose.model("Patch", patcSchema);

export default Patch;
