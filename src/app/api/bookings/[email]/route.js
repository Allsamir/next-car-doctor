import Bookings from "@/models/Bookings";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const bookings = await Bookings.find({ email: params.email });
    return NextResponse.json(bookings, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error is in Booking route" },
      { status: 500 },
    );
  }
}
