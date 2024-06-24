"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function SignInPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const res = signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  };
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
              Sign in
            </h3>
            <form className="card-body" onSubmit={handleSubmit}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign in
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
                <Link href={`/signup`} className="text-primary">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
