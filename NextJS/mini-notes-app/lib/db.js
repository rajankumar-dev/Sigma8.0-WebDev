import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mini-notes-app");
    console.log("db connected successfully");
  } catch (e) {
    console.error("error in connecting db", e);
    throw new Error("Failed to connect to database");
  }
}
