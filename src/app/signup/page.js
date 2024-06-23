"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function SignUpPage() {
  const handleSubmit = () => {};
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-20 my-20">
        <div className="flex-1">
          <Image
            src={`/assets/images/login/login.svg`}
            alt="Login"
            width={700}
            height={700}
          />
        </div>
        <div className="flex-1 items-center flex">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h3 className="text-center text-2xl mt-8 font-bold text-primary">
              Sign up
            </h3>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </div>
              <div className="text-center mt-4">
                <h6>or sign in with</h6>
                <div className="flex gap-4 justify-center mt-4 text-2xl">
                  <FcGoogle />
                  <FaGithub />
                </div>
              </div>
              <p className="text-center">
                Don&apos;t have any account?{" "}
                <Link href={`/signin`} className="text-primary">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
