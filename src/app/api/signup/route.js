import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    await User.create({
      name: body.name,
      email: body.email,
    });
    return NextResponse.json(
      { message: "User saved successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log("User already exists");
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 },
    );
  }
}
