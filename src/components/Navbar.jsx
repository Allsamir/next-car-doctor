"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const logo = (
    <Link href={`/`}>
      <Image src={`/assets/logo.svg`} alt="logo" width={100} height={100} />
    </Link>
  );
  const session = useSession();
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems.map((nav, key) => (
              <li key={key}>
                <Link
                  className="font-semibold hover:text-primary"
                  href={nav.path}
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {logo}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((nav, key) => (
            <li key={key}>
              <Link
                className="font-semibold hover:text-primary"
                href={nav.path}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Appointment</a>
        {session.status === "authenticated" ? (
          <>
            <Image
              src={session?.data.user?.image || ""}
              alt={session?.data.user?.name}
              height={50}
              width={50}
              className="rounded-full ml-4"
              title={session?.data.user?.name}
            />
            <button
              className="btn btn-primary ml-4"
              onClick={() => {
                toast.success("Logged out successfully");
                setTimeout(() => {
                  signOut();
                }, 2000);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link href={`/signin`} className="btn btn-primary ml-4">
            Login
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Navbar;
