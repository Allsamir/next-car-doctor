"use client";
import { useSession } from "next-auth/react";
import React from "react";

const UpdateBooking = ({ booking }) => {
  const { data } = useSession();
  const defalutDate = booking.date.slice(0, 16);
  console.log(defalutDate);
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
            <h2 className="uppercase">
              Update your {booking.service_name} booking details
            </h2>
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
                name="date"
                defaultValue={defalutDate}
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
                value={booking?.service_price}
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
                defaultValue={booking.phone}
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
                defaultValue={booking.address}
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Update Booking
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateBooking;
