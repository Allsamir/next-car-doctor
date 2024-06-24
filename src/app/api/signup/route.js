import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(body.password, saltRounds);
    const newUser = new User({
      name: body.name,
      email: body.email,
      password: hashedPassword,
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
