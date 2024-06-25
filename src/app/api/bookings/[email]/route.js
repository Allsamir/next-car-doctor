import Bookings from "@/models/Bookings";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { email } = params;
    let bookings;

    if (email.includes("@")) {
      bookings = await Bookings.find({ email });
    } else {
      bookings = await Bookings.findById({ _id: email });
    }
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

export async function DELETE(request, { params }) {
  try {
    const deleteBooking = await Bookings.findOneAndDelete({
      _id: params.email,
    });
    return NextResponse.json(deleteBooking, {
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

export async function PATCH(request, { params }) {
  try {
    const { date, phone, address } = await request.json();
    const updateBooking = await Bookings.findByIdAndUpdate(
      { _id: params.email },
      { date, phone, address },
      { new: true },
    );
    return NextResponse.json(updateBooking, {
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
