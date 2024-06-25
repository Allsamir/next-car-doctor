import Bookings from "@/models/Bookings";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const newBooking = new Bookings(body);
    await newBooking.save();
    return NextResponse.json(
      { message: "Thank you for Booking" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error has happened in Checkout" },
      { status: 500 },
    );
  }
}
