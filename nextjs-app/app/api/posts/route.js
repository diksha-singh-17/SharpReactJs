import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/db";

export const GET = async () => {
  let data = [];
  let success = true;
  try {
    await connect();
    data = await Post.find();
  } catch (error) {
    data = { result: "error" };
    success = false;
  }
  return NextResponse.json({ result: data, success });
};

export const POST = async (request) => {
  try {
    const payload = await request.json();
    await connect();
    const post = new Post(payload);
    await post.save();
    return new NextResponse("Post created successfully", { status: 201 });
  } catch (error) {
    return NextResponse.json("Error in creating post" + error, { status: 500 });
  }
};
