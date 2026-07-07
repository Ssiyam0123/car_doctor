import React from "react";
import Image from "next/image";
import Banner from "../../components/Banner";

export default function AboutPage() {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "15,000+", label: "Happy Clients" },
    { number: "50+", label: "Expert Mechanics" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Chief Mechanic",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      bio: "15+ years experience in engine repair and diesel diagnostics.",
    },
    {
      name: "Marcus Aurelius",
      role: "Electrical Specialist",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      bio: "Expert in computerized engine tuning and hybrid electric systems.",
    },
    {
      name: "Sarah Jenkins",
      role: "Transmission Expert",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      bio: "Specializes in automatic gearboxes and drivetrain engineering.",
    },
  ];

  const values = [
    { title: "Transparency", text: "We explain every issue and offer honest, upfront pricing before we start any repair." },
    { title: "Speed & Accuracy", text: "Latest diagnostic gear to troubleshoot quickly and fix the problem right first time." },
    { title: "Premium Quality", text: "We only use certified OEM parts to preserve your vehicle's safety and warranty." },
    { title: "Customer Centric", text: "Comfortable waiting lounges, free pick-ups, and flexible booking services." },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Header */}
      <Banner />

      {/* 2. Mission & Vision Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-orange-600 font-bold uppercase tracking-wider">Who We Are</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-6">
            We Are Committed To Keeping You Safe On The Road
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2016, Car Doctor has grown from a local workshop into a state-of-the-art diagnostic and repair center. Our mission is to provide the highest level of automotive service with integrity and transparency.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We understand how crucial your vehicle is to your daily life. That's why we continuously train our certified mechanics on the latest hybrid, electric, and standard engines.
          </p>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop"
            alt="Mechanic working on car"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 3. Core Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-600 font-bold uppercase tracking-wider">Our Values</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-12">The Pillars of Car Doctor</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <div className="h-12 w-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 mx-auto">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Professional Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Meet Our Expert Technicians</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden text-center hover:shadow-md transition">
              <div className="relative h-64 w-full bg-gray-100">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                <p className="text-orange-600 font-semibold text-sm mb-4">{t.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">"{t.bio}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Milestones & Achievements Counter */}
      <section className="bg-orange-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i} className="space-y-2">
              <div className="text-5xl font-black">{s.number}</div>
              <div className="text-orange-100 font-medium uppercase tracking-wider text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
