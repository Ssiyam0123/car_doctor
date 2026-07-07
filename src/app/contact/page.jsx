"use client";

import React from "react";
import Banner from "../../components/Banner";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const infoCards = [
    {
      icon: <Phone className="h-6 w-6 text-orange-600" />,
      title: "Call Us 24/7",
      details: "+880 1712-345678",
      subtext: "Emergency hotline service"
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: "Email Support",
      details: "support@cardoctor.com",
      subtext: "Response within 24 hours"
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: "Operating Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
      subtext: "Closed on Sundays"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <Banner />

      {/* 2. Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">We Are Here To Assist You</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((info, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 p-8 rounded-2xl text-center space-y-4 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                {info.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                <p className="text-orange-600 font-extrabold text-lg mt-2">{info.details}</p>
                <p className="text-gray-500 text-xs mt-1">{info.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Contact Form & 4. Map Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16 grid lg:grid-cols-12 gap-12">
        {/* Form */}
        <div className="lg:col-span-7 bg-gray-50 border border-gray-200 p-8 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
          <p className="text-gray-500 text-sm mb-6">Have questions or need a customized quote? Feel free to contact our help desk.</p>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  required
                  className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help you?"
                required
                className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message details..."
                required
                className="w-full p-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been received.");
              }}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map & Physical Location */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm h-80 relative bg-gray-100 flex items-center justify-center">
            {/* Map Placeholder Graphic */}
            <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop')" }}></div>
            <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center max-w-xs border border-gray-200">
              <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-2 animate-bounce" />
              <h4 className="font-bold text-gray-900">Our Main Workshop</h4>
              <p className="text-xs text-gray-600 mt-1">123 Car Doctor Way, Marine Drive Road, Cox's Bazar</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8 bg-gray-50 flex items-center gap-6">
            <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Visit Us Physically</h4>
              <p className="text-gray-600 text-sm mt-1">Stop by for a walk-in diagnostics test. We have comfortable waiting lounges and free Wi-Fi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Support FAQ Accordion */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-bold uppercase tracking-wider">Quick Help</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Support FAQs</h2>
          </div>
          <div className="space-y-4">
            <div className="collapse collapse-plus bg-white border border-gray-200 rounded-xl">
              <input type="radio" name="support-faq" defaultChecked />
              <div className="collapse-title text-lg font-bold text-gray-900">
                Do I need to book an appointment for diagnostic scans?
              </div>
              <div className="collapse-content text-sm text-gray-600">
                While we accept walk-in clients, booking an appointment online guarantees immediate service and eliminates waiting times.
              </div>
            </div>
            <div className="collapse collapse-plus bg-white border border-gray-200 rounded-xl">
              <input type="radio" name="support-faq" />
              <div className="collapse-title text-lg font-bold text-gray-900">
                How do I cancel or reschedule my booking?
              </div>
              <div className="collapse-content text-sm text-gray-600">
                You can cancel or reschedule by calling our customer service hotline at least 24 hours prior to your scheduled slot.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
