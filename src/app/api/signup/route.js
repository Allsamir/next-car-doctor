import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const newUser = new User({
      name: body.name,
      email: body.email,
      password: body.password,
    });
    await newUser.save();

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
