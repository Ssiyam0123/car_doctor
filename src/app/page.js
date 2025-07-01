import AboutUs from "../components/AboutUs";

import HeroSlider from "../components/HeroSlider";
import Hotline from "../components/Hotline";
import Service from "../components/Service";

export default function Home() {
  return (
    <section className="w-[90%] mx-auto items-center justify-center space-y-5 mt-10">
      <HeroSlider />
      <AboutUs />
      <Service />
      <Hotline />
    </section>
  );
}
