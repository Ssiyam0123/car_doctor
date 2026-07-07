import { connectDb } from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, address, date, message, serviceId, serviceTitle, price, img } = body;

    if (!name || !email || !phone || !address || !date || !serviceId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const bookingsCollection = await connectDb("bookings");
    const newBooking = {
      name,
      email,
      phone,
      address,
      date,
      message: message || "",
      serviceId,
      serviceTitle,
      price,
      img,
      status: "pending",
      createdAt: new Date(),
    };

    const result = await bookingsCollection.insertOne(newBooking);

    return NextResponse.json(
      { message: "Booking confirmed successfully", bookingId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
