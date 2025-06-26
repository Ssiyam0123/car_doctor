// components/HeroSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const heroSlides = [
  {
    id: 1,
    image: "/assets/images/banner/1.jpg", // Place this in public/images
    heading: "Affordable Price For Car Servicing",
    text: "There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form",
  },
  {
    id: 2,
    image: "/assets/images/banner/2.jpg",
    heading: "Expert Technicians For Any Car",
    text: "High-quality maintenance with experienced professionals at your service",
  },
  {
    id: 3,
    image: "/assets/images/banner/3.jpg",
    heading: "Quick And Reliable Repairs",
    text: "Fast turnaround without compromising quality or performance",
  },
  {
    id: 4,
    image: "/assets/images/banner/4.jpg", // Place this in public/images
    heading: "Affordable Price For Car Servicing",
    text: "There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form",
  },
  {
    id: 5,
    image: "/assets/images/banner/5.jpg",
    heading: "Expert Technicians For Any Car",
    text: "High-quality maintenance with experienced professionals at your service",
  },
  {
    id: 6,
    image: "/assets/images/banner/6.jpg",
    heading: "Quick And Reliable Repairs",
    text: "Fast turnaround without compromising quality or performance",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-[500px] rounded-lg"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full object-fill">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              className="object-cover rounded-lg"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

            {/* Content */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{slide.heading}</h2>
              <p className="text-gray-200 mb-6">{slide.text}</p>
              <div className="flex gap-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
                  Discover More
                </button>
                <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded border border-gray-300">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
