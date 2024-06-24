import { NextResponse } from "next/server";

export async function POST(request, { params }) {
  try {
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error has happened in Checkout" },
      { status: 500 },
    );
  }
}
