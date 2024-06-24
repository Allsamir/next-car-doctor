import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
const SocialLogin = () => {
  const handleSocialLogin = async (provider) => {
    const res = await signIn(provider);
    console.log(res);
  };
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
