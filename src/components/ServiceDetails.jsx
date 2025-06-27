import { connectDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import React from "react";

const ServiceDetails = async ({ id }) => {
  const serviceDetails = await connectDb("services");
  const data = await serviceDetails.findOne({ _id: new ObjectId(id) });
  return <div>{JSON.stringify(data)}</div>;
};

export default ServiceDetails;
