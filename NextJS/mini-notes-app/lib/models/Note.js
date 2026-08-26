import mongoose from "mongoose";

const notSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const Not = mongoose.Model("Not", notSchema);
