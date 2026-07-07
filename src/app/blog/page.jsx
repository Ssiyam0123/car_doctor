import React from "react";
import Image from "next/image";
import Link from "next/link";
import Banner from "../../components/Banner";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      title: "Signs Your Vehicle's Brakes Need Immediate Service",
      excerpt: "Squealing noise when stopping? Spongy pedal feel? Learn the warning signals your brake calipers, rotors, and pads are sending you before it's too late.",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop",
      date: "July 02, 2026",
      readTime: "5 min read",
      author: "Marcus Aurelius"
    },
    {
      title: "How Often Should You Really Change Engine Oil?",
      excerpt: "With synthetic oils on the rise, the old 3,000-mile rule is outdated. We break down when to change oil based on driving style, oil type, and manual specs.",
      image: "https://images.unsplash.com/photo-1552656967-7a0991a13906?q=80&w=600&auto=format&fit=crop",
      date: "June 28, 2026",
      readTime: "4 min read",
      author: "Sarah Jenkins"
    },
    {
      title: "Wheel Alignment vs. Balancing: What's the Difference?",
      excerpt: "Many drivers confuse wheel balancing with alignment. Discover how both procedures differ, why they are both vital, and how they protect tire tread life.",
      image: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=600&auto=format&fit=crop",
      date: "June 20, 2026",
      readTime: "6 min read",
      author: "John Doe"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <Banner />

      {/* 2. Featured Post Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-orange-600 font-bold uppercase tracking-wider">Car Doctor Insights</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-2">Latest Articles & Tips</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition bg-gray-50">
          <div className="lg:col-span-7 relative h-80 lg:h-auto min-h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop"
              alt="Engine service diagnostic"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 p-8 flex flex-col justify-center space-y-4">
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full w-max">
              Maintenance Guide
            </span>
            <h3 className="text-3xl font-extrabold text-gray-900 leading-tight">
              5 Essential Tips to Keep Your Engine Healthy in Summer Heat
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Extreme heat is the number one enemy of car batteries and radiators. Learn how checking coolant loops, belt tensions, and tire pressures keeps your car cool and avoids highway towing.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> July 07, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> 8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Articles Grid & 4. Categories Layout */}
      <section className="max-w-7xl mx-auto px-4 pb-16 grid lg:grid-cols-12 gap-12">
        {/* Articles List */}
        <div className="lg:col-span-8 space-y-12">
          <h3 className="text-2xl font-bold text-gray-900 border-b pb-4">Recent Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((art, i) => (
              <div key={i} className="flex flex-col justify-between border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {art.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {art.readTime}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 leading-snug line-clamp-2">{art.title}</h4>
                    <p className="text-gray-500 text-sm line-clamp-3">{art.excerpt}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-gray-400" /> By {art.author}</span>
                  <span className="text-orange-600 font-bold flex items-center gap-0.5 hover:translate-x-1 transition-transform cursor-pointer">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-3 mb-4">Categories</h3>
            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li className="flex justify-between hover:text-orange-600 cursor-pointer"><span>Engine Repair</span> <span className="text-gray-400">(12)</span></li>
              <li className="flex justify-between hover:text-orange-600 cursor-pointer"><span>Brake Systems</span> <span className="text-gray-400">(8)</span></li>
              <li className="flex justify-between hover:text-orange-600 cursor-pointer"><span>AC Maintenance</span> <span className="text-gray-400">(5)</span></li>
              <li className="flex justify-between hover:text-orange-600 cursor-pointer"><span>Tires & Alignment</span> <span className="text-gray-400">(9)</span></li>
              <li className="flex justify-between hover:text-orange-600 cursor-pointer"><span>Diagnostics Tips</span> <span className="text-gray-400">(15)</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Subscribe Newsletter Section */}
      <section className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-md mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Subscribe for Monthly Tips</h3>
          <p className="text-gray-500 text-sm">
            Get expert car care tips, diagnostic guides, and discount promos directly to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-xl transition duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
