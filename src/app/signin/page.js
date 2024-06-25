"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "@/components/SocialLogin";
export default function SignInPage() {
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
    if (res.status === 200) {
      toast.success("Logged in successfully");
    } else if (res.status === 401) {
      toast.error("Invalid email or password");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-4 my-20">
        <div className="flex-1">
          <Image
            src={`/assets/images/login/login.svg`}
            alt="Login"
            width={700}
            height={700}
            className="w-auto h-auto"
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
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
              <div className="text-center mt-4">
                <h6>or sign in with</h6>
                <SocialLogin />
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
        <Toaster />
      </div>
    </>
  );
}
