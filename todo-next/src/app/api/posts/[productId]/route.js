import connect from "../../../../../db";
import { NextResponse } from "next/server";
import Post from "../../../../../models/Post";

export async function PUT(request, content) {
  const todoId = content.params.productId;
  const filter = { _id: todoId };
  const payload = await request.json();
  await connect();
  const result = await Post.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}

export async function DELETE(request, content) {
  const todoId = content.params.productId;
  const filter = { _id: todoId };
  await connect();
  const result = await Post.deleteOne(filter);
  return NextResponse.json({ result, success: true });
}
