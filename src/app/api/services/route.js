import Service from "@/models/Services";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const services = await Service.find({});
    return NextResponse.json(services, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
