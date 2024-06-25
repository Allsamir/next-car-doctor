import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
const SocialLogin = () => {
  const session = useSession();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider, {
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };
  if (session.status === "authenticated") {
    toast.success("Logged in successfully");
  }
  return (
    <div className="flex gap-4 justify-center mt-4 text-2xl">
      <FcGoogle
        className="cursor-pointer"
        onClick={() => handleSocialLogin("google")}
      />
      <FaGithub
        className="cursor-pointer"
        onClick={() => handleSocialLogin("github")}
      />
    </div>
  );
};

export default SocialLogin;
