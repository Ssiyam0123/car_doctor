import { connectDb } from "../../../../lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const bookingsCollection = await connectDb("bookings");
    const result = await bookingsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Booking cancelled successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete booking error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req, { params }) {
  try {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const body = await req.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json({ error: "Status field is required" }, { status: 400 });
    }

    const bookingsCollection = await connectDb("bookings");
    const result = await bookingsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ message: `Booking status updated to ${status}` }, { status: 200 });
  } catch (error) {
    console.error("Update booking error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
