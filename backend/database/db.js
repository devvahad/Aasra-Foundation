import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Db);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};


