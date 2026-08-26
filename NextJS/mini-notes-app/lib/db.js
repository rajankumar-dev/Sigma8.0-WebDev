import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mini-notes-app");
    console.log("db connected");
  } catch (e) {
    throw new Error(e);
  }
}
