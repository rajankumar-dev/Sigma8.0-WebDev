import mongoose from "mongoose";

export async function connectDB() {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/ad-notes-app",
    );
    console.log(conn);
  } catch (error) {
    throw new Error(error);
  }
}
