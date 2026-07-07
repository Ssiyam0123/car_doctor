"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Check, X, Trash2, Calendar, Clock, MapPin, User, Mail, Phone } from "lucide-react";

export default function AdminBookingsTable({ initialBookings }) {
  const [bookings, setBookings] = useState(initialBookings);

  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await axios.patch(`/api/bookings/${id}`, { status });
      if (response.status === 200) {
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === id ? { ...booking, status } : booking
          )
        );
      }
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to cancel and delete this booking?")) return;

    try {
      const response = await axios.delete(`/api/bookings/${id}`);
      if (response.status === 200) {
        setBookings((prev) => prev.filter((booking) => booking._id !== id));
      }
    } catch (err) {
      console.error("Error deleting booking:", err);
      alert("Failed to delete booking");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Manage Appointments</h1>
          <p className="text-gray-500 mt-1">View and handle all incoming car servicing requests.</p>
        </div>
        <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl border border-orange-200 font-semibold text-sm">
          Total Bookings: {bookings.length}
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
          <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-700">No Appointments Found</h3>
          <p className="text-gray-500 mt-1">Bookings submitted by users will appear here.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Customer Details</th>
                  <th className="px-6 py-4">Date & Location</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {bookings.map((booking) => (
                  <tr key={booking._id} className="hover:bg-gray-50 transition-colors">
                    {/* Service Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                          {booking.img ? (
                            <Image
                              src={booking.img}
                              alt={booking.serviceTitle}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs">No Image</div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{booking.serviceTitle}</div>
                          <div className="text-orange-600 font-semibold mt-0.5">${booking.price}</div>
                        </div>
                      </div>
                    </td>

                    {/* Customer Info */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="font-medium text-gray-900 flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5 text-gray-400" />
                          {booking.name}
                        </div>
                        <div className="text-gray-500 text-xs flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-gray-400" />
                          {booking.email}
                        </div>
                        <div className="text-gray-500 text-xs flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-gray-400" />
                          {booking.phone}
                        </div>
                      </div>
                    </td>

                    {/* Date & Address */}
                    <td className="px-6 py-4">
                      <div className="space-y-1">
                        <div className="text-gray-900 font-medium flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-gray-400" />
                          {booking.date}
                        </div>
                        <div className="text-gray-500 text-xs flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-gray-400" />
                          {booking.address}
                        </div>
                        {booking.message && (
                          <div className="text-gray-400 text-xs italic max-w-xs truncate mt-1">
                            "{booking.message}"
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                          booking.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {booking.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleUpdateStatus(booking._id, "approved")}
                              title="Approve Appointment"
                              className="p-2 bg-green-50 text-green-600 hover:bg-green-100 rounded-lg transition"
                            >
                              <Check className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleUpdateStatus(booking._id, "cancelled")}
                              title="Decline Appointment"
                              className="p-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg transition"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleDelete(booking._id)}
                          title="Delete Booking"
                          className="p-2 bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-red-600 rounded-lg transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
