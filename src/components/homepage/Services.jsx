import React from "react";
import ServiceCard from "../ServiceCard";

const getServices = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/services`);
    const services = res.json();
    return services;
  } catch (error) {
    console.error(error);
  }
};

const Services = async () => {
  const services = await getServices();
  return (
    <>
      <div className="text-center">
        <h5 className="font-bold text-orange-600 text-xl pb-3">Services</h5>
        <h1 className="text-4xl font-bold">Our Services Area</h1>
        <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="my-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {services?.map((s, i) => (
          <ServiceCard
            key={i}
            img={s.img}
            title={s.title}
            des={s.description}
            price={s.price}
            _id={s._id}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
