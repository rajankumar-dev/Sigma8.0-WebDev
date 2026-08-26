import { connectDB } from "@/lib/db";
import { Not } from "@/lib/models/Note";

export async function POST(req) {
  await connectDB();
  const { title, content } = await req.json();

  const not = await Not.create({ title, content });
  return Response.json(not, { status: 201 });
}
