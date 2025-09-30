import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesList } from "./common/Helper";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesList.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <Link to="/services" className="text-red-500 underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className=" mx-auto p-8 ">
      <img
        src={service.image}
        alt={service.title}
        className="w-full rounded-lg mb-6 aspect-16/9 h-[700px] object-cover"
      />
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-700 mb-8">{service.description}</p>
      <Link
        to="/services"
        className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Back to Services
      </Link>
    </div>
  );
};

export default ServiceDetail;

