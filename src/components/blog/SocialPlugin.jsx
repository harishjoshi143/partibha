import React, { useState } from "react";
import {
  BellIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../common/Icon";
import { useFormDataContext } from "../../context/FormContext";
import Loader from "../Loader";

const SocialPlugin = () => {
    const { subscribeWithMail,loading } = useFormDataContext();
  const [userData, setUserData] = useState({
    email: "",
  });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

 async function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitting email:", userData.email);
  await subscribeWithMail(userData.email);
  setUserData({ email: "" });
}

  return (
    <div className="lg:ps-5">
       {loading && <Loader />}
      <h2 className="font-bold text-2xl lg:text-[32px] text-black text-center uppercase">
        SOCIAL PLUGIN
      </h2>
      <div className="bg-[#F6F6F6] mt-10 py-7 px-2 md:px-10 rounded-[20px]">
        <div className="flex items-center justify-center gap-4 lg:gap-11">
          <div className="flex gap-1 sm:gap-2.5">
            <a
              href="https://www.youtube.com/channel/UCDgqAiRXjp8Bx9J6vqJ0bzQ"
              target="_blank"
              rel="noreferrer"
              className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.facebook.com/pratibhaiteducation"
              target="_blank"
              rel="noreferrer"
              className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/pratibha_it_education/"
              target="_blank"
              rel="noreferrer"
              className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://twitter.com/Pratibhaitedu"
              target="_blank"
              rel="noreferrer"
              className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border border-black bg-white flex flex-col gap-4 justify-center items-center rounded-[20px] px-6 py-12 mt-12 relative"
        >
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <BellIcon />
          </span>
          <h2 className="font-bold text-lg lg:text-2xl text-black text-center capitalize">
            Follow by Email
          </h2>
          <p className="font-normal text-sm  text-black text-center capitalize">
            Get Notified About Next Update Direct to Your Inbox
          </p>
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="email"
              className="font-normal text-base text-black capitalize"
            >
              Email Address
            </label>
            <input
              className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
              type="text"
              required
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <button className="font-bold text-base md:text-xl bg-red leading-6 px-6 py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SocialPlugin;
