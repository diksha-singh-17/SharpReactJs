import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo connection succesfull!");
  } catch (error) {
    throw new Error("Error in making coonection");
  }
};
export default connect;
