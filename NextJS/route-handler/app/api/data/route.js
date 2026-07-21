export async function POST(request) {
  const { title, completed } = await request.json(); // JSON parse karega

  //console.log(body);

  return Response.json({
    success: true,
    message: "todo created successfully",
    todo: {
      title,
      completed,
    },
  });
}
