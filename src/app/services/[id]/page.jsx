import Banner from "../../../components/Banner";
import ServiceDetails from "../../../components/ServiceDetails";
import React from "react";

const ServiceDetailsPage = ({ params }) => {
  const id = params?.id.toString();
  console.log(id);
  return (
    <div>
      <div>
        <Banner />
      </div>
      <ServiceDetails id={id} />
    </div>
  );
};

export default ServiceDetailsPage;
