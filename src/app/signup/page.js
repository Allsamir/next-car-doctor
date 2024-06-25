"use client";
import Image from "next/image";
import Link from "next/link";
import SocialLogin from "@/components/SocialLogin";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function SignUpPage() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const res = fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if ((await res).status === 200) {
      toast.success("Successfully Registerd!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
      e.target.reset();
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
                <SocialLogin />
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
        <Toaster />
      </div>
    </>
  );
}
