import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.models = {};
const postSchema = new Schema({
  todo: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.Post || mongoose.model("POST", postSchema);
