import React from "react";
import AdminBookingsTable from "../../../components/AdminBookingsTable";
import { connectDb } from "../../../lib/mongodb";

export default async function AdminBookingsPage() {
  let bookings = [];

  try {
    const bookingsCollection = await connectDb("bookings");
    const bookingsData = await bookingsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    bookings = bookingsData.map((booking) => ({
      ...booking,
      _id: booking._id.toString(),
      createdAt: booking.createdAt ? booking.createdAt.toISOString() : null,
    }));
  } catch (error) {
    console.error("Error loading bookings for admin:", error);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminBookingsTable initialBookings={bookings} />
    </div>
  );
}
