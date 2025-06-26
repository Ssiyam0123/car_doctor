import AboutUs from "@/components/AboutUs";
import CarouselPlugin from "@/components/CarouselPlugin";
import Hero from "@/components/Hero";
import HeroSlider from "@/components/HeroSlider";
import Service from "@/components/Service";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-[90%] mx-auto items-center justify-center space-y-5 mt-10">
      <HeroSlider />

      <AboutUs />
      <Service/>
    </section>
  );
}
