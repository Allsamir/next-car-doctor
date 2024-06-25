import Image from "next/image";
import Link from "next/link";
import React from "react";

export const getServicesDetails = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`,
    );
    const serviceDetails = await res.json();
    return serviceDetails;
  } catch (error) {
    console.error(error);
  }
};

export let metadata = {
  title: "",
  description: "",
};

const ServicesDetailsPage = async ({ params }) => {
  const serviceDetails = await getServicesDetails(params.id);
  metadata.title = serviceDetails?.title;
  metadata.description = serviceDetails?.description;
  return (
    <>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(${serviceDetails.img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-start justify-start">
          <div className="text-white">
            <h2 className="uppercase">{serviceDetails?.title}</h2>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-slate-300 p-8">
        <span className="text-3xl text-orange-600 font-bold">Details of</span>
        <h1 className="text-3xl text-orange-600 font-bold">
          {serviceDetails.title}
        </h1>
        <p className="mt-4 text-sm leading-7">{serviceDetails.description}</p>
      </div>
      <div className="flex mt-8 gap-8">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 grid-cols-1 flex-1">
          {serviceDetails?.facility.map((f, i) => (
            <div key={i} className="bg-orange-300 text-black p-8">
              <h3 className="text-2xl mb-4 font-bold">{f?.name}</h3>
              <p className="text-sm leading-7">{f?.details}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-slate-200 p-4">
          <div className="p-8 w-full">
            <Image
              src={serviceDetails?.img}
              alt={serviceDetails?.title}
              width={500}
              height={300}
              className="w-full"
            />
            <span className="mt-4 inline-block text-2xl text-primary font-bold">
              Price: ${serviceDetails?.price}
            </span>
            <Link
              href={`/checkout/${serviceDetails._id}`}
              className="mt-4 block"
            >
              <button className="btn btn-primary btn-block">CheckOut</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsPage;
