import Service from "@/models/Services";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const serviceDetails = await Service.findOne({ _id: params.id });
    return NextResponse.json(serviceDetails, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
