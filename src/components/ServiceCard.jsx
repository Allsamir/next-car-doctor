import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ img, title, price, _id }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image src={img} width={400} height={400} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-bold text-primary">${price}</p>
        <div className="card-actions justify-end">
          <Link href={`/service/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
