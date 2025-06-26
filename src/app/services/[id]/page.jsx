import Banner from "@/components/Banner";
import { collectionName, connectDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import React from "react";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  const serviceDetails = (
    await connectDb(collectionName.serviceCollecttions)
  ).findOne({ _id: new ObjectId(id) });

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <ServiceDetailsPage data={serviceDetails} />
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
