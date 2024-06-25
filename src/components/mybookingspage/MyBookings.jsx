"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyBookings = () => {
  const { data } = useSession();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/api/bookings/${data?.user?.email}`,
        );
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const bookings = await res.json();
        setBookings(bookings);
      } catch (error) {
        setError(error.message);
      }
    };
    if (data?.user?.email) {
      loadBookings();
    }
  }, [data?.user?.email]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage: `url(/assets/images/about_us/parts.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-start justify-start">
          <div className="text-white">
            <h2 className="uppercase">My Bookings</h2>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((b, i) => (
                <tr key={i} className="font-bold">
                  <th>
                    <Image
                      src={b?.service_img}
                      alt="Service"
                      width={200}
                      height={200}
                    />
                  </th>
                  <td>{b?.service_name}</td>
                  <td>${b?.service_price}</td>
                  <td>{new Date(b?.date).toLocaleDateString()}</td>
                  <th>
                    <button className="btn btn-primary">Delete</button>
                    <button className="btn btn-primary bg-white text-primary ml-4">
                      Edit
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyBookings;