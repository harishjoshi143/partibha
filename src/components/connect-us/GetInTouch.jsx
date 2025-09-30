/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  ContectDialIcon,
  ContectEmailIcon,
  ContectLocationIcon,
  DialerIcon,
  EmailIcon,
  FacebookIcon,
  FaxIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../common/Icon";

const GetInTouch = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const data = {
    name: userData.name,
    email: userData.email,
    message: userData.message,
  };

  const getContactInfo = async () => {
    const path = "https://contact-api-4vbm.onrender.com/api/contacts";
    try {
      const response = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userData.name,
          email: userData.email,
          message: userData.message,
        }),
      });

      const result = await response.json();
      console.log(result, "result");
    } catch (error) {
      console.error("API error:", error);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    getContactInfo();
    setUserData({
      name: "",
      email: "",
      message: "",
    });
    console.log("The form was submitted: ", userData);
  }

  return (
    <div className="pb-28 bg-[#F6F6F6] mt-[151px]">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-wrap -translate-y-32 py-6">
          <div className="w-full sm:w-1/2 lg:w-1/3 mt-3 px-2">
            <div className="flex flex-col gap-2 items-center p-5 shadow-backdrop bg-white rounded-[30px] h-full">
              <span className="contact_icon">
                <LocationIcon />
              </span>
              <h2 className="font-medium text-2xl text-black uppercase text-center">
                OUR MAIN OFFICE
              </h2>
              <p className="font-normal text-base text-black text-center capitalize">
                Near Govt Sr. Sec. School, Mirzapur Hisar (HR) 125005
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mt-3 px-2">
            <div className="flex flex-col gap-2 items-center p-5 shadow-backdrop bg-white rounded-[30px] h-full">
              <span className="contact_icon">
                <DialerIcon />
              </span>
              <h2 className="font-medium text-2xl text-black uppercase text-center">
                CONTACT NUMBER
              </h2>
              <div className="flex gap-3 ">
                <a
                  href="tel:9992433353"
                  className="font-normal text-base text-black text-center capitalize"
                >
                  9992433353
                </a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mt-3 px-2">
            <div className="flex flex-col gap-2 items-center p-5 shadow-backdrop bg-white rounded-[30px] h-full">
              <span className="contact_icon">
                <EmailIcon />
              </span>
              <h2 className="font-medium text-2xl text-black uppercase text-center">
                EMAIL ADDRESS
              </h2>
              <a
                className="font-normal text-base text-black text-center"
                href="mailto:info@pratibhaiteducation.com"
              >
                info@pratibhaiteducation.com
              </a>
            </div>
          </div>
          {/* <div className="w-1/4 px-2">
              <div className="flex flex-col gap-2 items-center p-5 shadow-backdrop bg-white rounded-[30px] h-full">
                <span>
                  <FaxIcon />
                </span>
                <h2 className="font-medium text-2xl text-black uppercase text-center">
                  fax
                </h2>
                <p className="font-normal text-base text-black text-center capitalize">
                  comming soon
                </p>
              </div>
            </div> */}
        </div>

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="md:pe-4 lg:pe-12 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-normal text-xl lg:text-2xl text-black capitalize"
                >
                  name
                </label>
                <input
                  className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-2.5 px-2"
                  type="text"
                  required
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-normal text-xl lg:text-2xl text-black capitalize"
                >
                  email
                </label>
                <input
                  className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-2.5 px-2"
                  type="text"
                  required
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-normal text-xl lg:text-2xl text-black capitalize"
                >
                  Message
                </label>
                <textarea
                  className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-2.5 px-2 h-[132px] resize-none"
                  name="message"
                  id="message"
                  value={userData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="font-bold text-xl md:text-2xl bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300">
                Submit
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="flex flex-col justify-center gap-5 md:ps-4 lg:ps-12 h-full">
              <h2 className="font-normal text-3xl lg:text-4xl xl:text-[45px] text-red">
                Get in Touch
              </h2>
              <p className="font-medium text-base lg:text-lg text-black">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal{" "}
              </p>
              <div className="flex items-center gap-4 lg:gap-11">
                <div className="flex gap-1 sm:gap-2.5">
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
                  >
                    <YouTubeIcon />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-8 h-8 justify-center items-center border-2 border-black rounded-full hover:border-red duration-300 contect_social_icons"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-16">
          <h2 className="font-normal text-3xl lg:text-4xl xl:text-[45px] text-red text-center">
            Our Branches
          </h2>

          <div className="flex   py-6 mt-6">
            <div className=" w-full sm:w-1/2 lg:w-1/3 px-2">
              <div className="flex flex-col gap-2 items-center p-5 shadow-backdrop bg-white rounded-[30px] h-full">
                <span className="contact_icon">
                  <LocationIcon />
                </span>
                <h2 className="font-medium text-2xl text-black uppercase text-center">
                  Branch Office
                </h2>
                <p className="font-normal text-base text-black text-center capitalize">
                  3rd Floor, Rama Complex, Parijat Chowk, Hisar (HR) 125001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
