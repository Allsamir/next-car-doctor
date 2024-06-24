"use client";

import { useSession } from "next-auth/react";
import React from "react";

const CheckoutPage = ({ id, service }) => {
  const { data } = useSession(); // session data is coming from SessionProvider in Provider folder
  return (
    <>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(https://i.ibb.co/R6Z2nFM/55.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-start justify-start">
          <div className="text-white">
            <h2 className="uppercase">Checkout for {service.title} Service</h2>
          </div>
        </div>
      </div>
      <div className="mt-8 shadow-2xl bg-base-200">
        <form className="card-body">
          <div className="flex gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                readOnly
                value={data?.user?.name}
                name="name"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="datetime-local"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                readOnly
                value={data?.user?.email}
                name="email"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
                readOnly
                value={service?.price}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="tel"
                placeholder="Phone"
                className="input input-bordered"
                required
                name="phone"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered"
                required
                name="address"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Confirm Order</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutPage;
