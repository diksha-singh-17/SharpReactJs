import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/db";

export const GET = async (request) => {
  try {
    await connect();
    return new NextResponse("Hello from db", { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching posts" + error, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const payload = await request.json();
    await connect();

    const post = new Post(payload);
    await post.save();
    return new NextResponse("Post created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse("Error in creating post" + error, { status: 500 });
  }
};
