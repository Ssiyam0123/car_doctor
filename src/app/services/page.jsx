import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Banner from "../../components/Banner";
import { connectDb } from "../../lib/mongodb";

export default async function ServicesPage() {
  let servicesData = [];
  try {
    const servicesCollection = await connectDb("services");
    const data = await servicesCollection.find({}).toArray();
    servicesData = data.map(service => ({
      ...service,
      _id: service._id.toString()
    }));
  } catch (error) {
    console.error("Error loading services in Services page:", error);
  }

  const benefits = [
    "Extended Vehicle Lifespan",
    "Maximized Safety & Reliability",
    "Optimized Fuel Efficiency",
    "Preserved Resale Value",
    "Early Defect Detection",
    "Complete Peace of Mind"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <Banner />

      {/* 2. Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12 space-y-3">
          <span className="text-orange-600 font-bold uppercase tracking-wider">What We Offer</span>
          <h2 className="text-4xl font-extrabold text-gray-900">Our Professional Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Explore our state-of-the-art car diagnostic and repair services tailored to keep your vehicle in prime condition.
          </p>
        </div>

        {servicesData.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Error loading services. Please try again.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((card) => (
              <div
                className="bg-white border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
                key={card._id}
              >
                <div>
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={card.img}
                      fill
                      alt={card.title}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mt-2">{card.description}</p>
                </div>
                <div className="text-lg text-orange-600 flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="font-extrabold">${card.price}</span>
                  <Link href={`/services/${card._id}`} className="hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 3. Servicing Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 font-bold uppercase tracking-wider">Why Maintain?</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-6">
              The Real Benefits of Regular Car Maintenance
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Skipping scheduled maintenance might save money today, but it leads to massive breakdowns tomorrow. Regular servicing keeps your car efficient, emissions-clean, and completely safe.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop"
              alt="Engine oil replacement"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Service FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold uppercase tracking-wider">Help Desk</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          <div className="collapse collapse-plus bg-gray-50 border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-bold text-gray-900">
              How often should I get my wheels aligned?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              We recommend getting a wheel alignment check every 10,000 miles or if you notice your vehicle pulling to one side or uneven tire wear.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-50 border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-bold text-gray-900">
              What does it mean if my check engine light flashes?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              A flashing check engine light indicates a severe misfire that could damage your catalytic converter. You should pull over safely and seek professional service immediately.
            </div>
          </div>
          <div className="collapse collapse-plus bg-gray-50 border border-gray-200 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-bold text-gray-900">
              Can I supply my own replacement auto parts?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              To guarantee the quality of our repair work, we only install OEM parts sourced directly through our trusted partners, which include a full warranty.
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call To Action Banner */}
      <section className="bg-orange-600 text-white py-12 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to Schedule an Appointment?</h2>
          <p className="text-orange-100 max-w-xl mx-auto">
            Don't wait for the warning light to flash. Secure your car service booking today and let our specialists audit your vehicle.
          </p>
          <div>
            <Link href="/login">
              <button className="bg-white text-orange-600 font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition shadow-lg">
                Book Appointment Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
