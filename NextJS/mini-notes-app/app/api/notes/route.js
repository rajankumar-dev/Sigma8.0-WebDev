import { connectDB } from "@/lib/db";
import { Not } from "@/lib/models/Note";

export async function GET(req) {
  await connectDB();
  const notes = await Not.find().sort({ createdAt: -1 });

  return Response.json(notes, { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const { title, content } = await req.json();

  const not = await Not.create({ title, content });
  return Response.json(not, { status: 201 });
}
