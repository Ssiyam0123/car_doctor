import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full relative">
      <Image
        src={"/assets/images/checkout/checkout.png"}
        height={1137}
        width={3000}
        alt="banner"
        className="w-full shadow-2xl"
      />
      <div className="absolute w-full h-full top-0 z-50 tracking-normal text-center text-white text-4xl font-semibold p-20">Service Details</div>
    </div>
  );
};

export default Banner;
