import { FlagTriangleRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { connectDb } from "@/lib/mongodb";

const Service = async() => {
 
  const serviceCollecttion = connectDb('services')
  const data = await (await serviceCollecttion).find({}).toArray()

  return (
    <section>
      <div className="space-y-4">
        <h3 className="text-xl text-center font-semibold text-orange-600">
          Services
        </h3>
        <h3 className="text-4xl text-center font-semibold">Our Service Area</h3>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-10">
        {data.map((card) => (
          <div
            className="col-span-12 md:col-span-6 lg:col-span-4 border-2 border-slate-400 p-4  rounded-2xl space-y-2"
            key={card?._id}
          >
            <Image
              src={card?.img}
              height={314}
              width={208}
              alt="service card"
              className="rounded-2xl w-full mx-auto"
            />
            <h2 className="text-2xl font-semibold">{card?.title}</h2>
            <div className="text-xl text-orange-600 flex justify-between">
              <h3>Price: ${card?.price}</h3>
              <h6><FlagTriangleRight/></h6>
              
            </div>
          </div>
        ))}
      </div>
      <Button className={'btn mx-auto items-center flex mt-10 p-4 btn-outline bg-transparent border-orange-600 text-orange-600'}>
        More Services
      </Button>
    </section>
  );
};

export default Service;
