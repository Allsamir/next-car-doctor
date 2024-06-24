import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
const SocialLogin = () => {
  const session = useSession();
  const router = useRouter();
  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider, { redirect: false });
  };
  if (session.status === "authenticated") {
    toast.success("Logged in successfully");
    setTimeout(() => {
      router.push("/");
    }, 2000);
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
