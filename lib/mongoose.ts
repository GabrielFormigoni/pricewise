import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  mongoose.set("strictQuery", false);

  if (!process.env.MONGODB_URI) {
    return console.log("No MongoDB URI provided");
  }

  if (isConnected) {
    return console.log("Already connected to MongoDB");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;

    console.log("Successfully connected to MongoDB");
  } catch (error: any) {
    console.log(error);
  }
}
