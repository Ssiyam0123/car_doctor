import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

const Hero = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Image
            alt="cover image"
            src={"/assets/images/banner/1.jpg"}
            height={100}
            width={200}
            className="w-[80%] mx-auto h-[600px] md:basis-1/2 lg:basis-1/3"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="cover image"
            src={"/assets/images/banner/2.jpg"}
            height={100}
            width={200}
            className="w-[80%] mx-auto h-[600px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="cover image"
            src={"/assets/images/banner/3.jpg"}
            height={100}
            width={200}
            className="w-[80%] mx-auto h-[600px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="cover image"
            src={"/assets/images/banner/4.jpg"}
            height={100}
            width={200}
            className="w-[80%] mx-auto h-[600px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="cover image"
            src={"/assets/images/banner/5.jpg"}
            height={100}
            width={200}
            className="w-[80%] mx-auto h-[600px]"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="cover image"
            src={"/assets/images/banner/6.jpg"}
            height={100}
            width={200}
            className="w-[80%] mx-auto h-[600px]"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hero;
