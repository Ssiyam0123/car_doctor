"use server";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { connectDb } from "../lib/mongodb";
import Link from "next/link";

const Service = async () => {
  try {
    const servicesCollection = await connectDb('services');
    const servicesData = await servicesCollection.find({}).toArray();

    return (
      <section>
        <div className="space-y-4">
          <h3 className="text-xl text-center font-semibold text-orange-600">
            Services
          </h3>
          <h3 className="text-4xl text-center font-semibold">Our Service Area</h3>
          <p className="text-center">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 mt-10">
          {servicesData?.map((card) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 border-2 border-slate-400 p-4 rounded-2xl space-y-2"
              key={card?._id.toString()} // Convert ObjectId to string
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
                <Link href={`/services/${card?._id}`}>
                  <ArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Button
          className={
            "btn mx-auto items-center flex mt-10 p-4 btn-outline bg-transparent border-orange-600 text-orange-600"
          }
        >
          More Services
        </Button>
      </section>
    );
  } catch (error) {
    console.error("Error fetching services:", error);
    return (
      <section>
        <div className="text-center py-10">
          <h3 className="text-xl text-red-600">Error loading services</h3>
          <p>Please try again later</p>
        </div>
      </section>
    );
  }
};

export default Service;