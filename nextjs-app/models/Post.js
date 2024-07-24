import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.models = {};
const postSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

export default mongoose.models.Post || mongoose.model("POST", postSchema);
