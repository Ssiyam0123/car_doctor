"use client";

import React, { useState } from "react";
import axios from "axios";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutForm({ service }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/bookings", {
        ...formData,
        serviceId: service._id,
        serviceTitle: service.title,
        price: service.price,
        img: service.img,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
      }
    } catch (err) {
      console.error("Booking error:", err);
      setError(err.response?.data?.error || "Failed to confirm booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 bg-white border border-gray-200 rounded-2xl shadow-xl text-center space-y-6 animate-fade-in">
        <div className="flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 animate-bounce" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">Booking Confirmed!</h2>
        <p className="text-gray-600">
          Thank you for choosing Car Doctor. Your booking for <strong className="text-orange-600">{service.title}</strong> has been successfully placed.
        </p>
        <div className="border-t border-gray-100 pt-4 text-left text-sm text-gray-500 space-y-2">
          <p><strong>Customer:</strong> {formData.name}</p>
          <p><strong>Service Date:</strong> {formData.date}</p>
          <p><strong>Total Price:</strong> ${service.price}</p>
        </div>
        <button
          onClick={() => window.location.href = "/"}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 shadow-md"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-200">
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold text-gray-900">Book Service: {service.title}</h2>
        <p className="text-gray-500">Please fill out the form below to schedule your appointment.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-r-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service & Price (Disabled Inputs) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Title</label>
            <input
              type="text"
              value={service.title}
              disabled
              className="w-full p-3 bg-gray-200 border border-gray-300 rounded-xl text-gray-600 cursor-not-allowed font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Price ($)</label>
            <input
              type="text"
              value={`$${service.price}`}
              disabled
              className="w-full p-3 bg-gray-200 border border-gray-300 rounded-xl text-gray-600 cursor-not-allowed font-medium"
            />
          </div>

          {/* User Fields */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Service Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Service Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your delivery/service location"
            required
            className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Special Instructions / Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe any specific issues or requests"
            className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition duration-200 shadow-lg flex justify-center items-center gap-2"
        >
          {loading ? (
            <span className="inline-block animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          ) : (
            "Confirm Booking Order"
          )}
        </button>
      </form>
    </div>
  );
}
