/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from "../Icon";
import { Link } from "react-router-dom";

const WelcomeHeader = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);
  return (
    <div className="bg-welcome_header bg-cover bg-center relative z-30 max-sm:bg-gray_light">
      <div className="container custom_container mx-auto flex justify-end px-3">
        <div className="w-full sm:w-[80%] lg:w-[75%] xl:w-[72%]">
          <div className="flex flex-col sm:flex-row justify-between lg:justify-between items-center py-2 gap-4">
            <h2 className="font-extrabold text-sm sm:text-base lg:text-lg text-white sm:leading-[30px] uppercase text-center lg:text-start">
              WELCOME TO PRATIBHA IT EDUCATION
            </h2>
            <div className="lg:flex items-center gap-2 lg:gap-6 hidden ">
              <div className="flex gap-2.5">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <FacebookIcon />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <InstagramIcon />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <TwitterIcon />
                </a>
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="font-medium text-base text-[#121212] leading-6 px-3 py-1 bg-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
                >
                  Login
                </button>
                {isOpen && (
                  <div
                    onClick={() => setIsOpen(false)}
                    className="fixed top-0 left-0 w-screen h-screen"
                  ></div>
                )}
                {isOpen && (
                  <div className="absolute right-0 top-11 w-36 bg-white shadow-2xl rounded-lg">
                    {/* Dropdown content */}
                    <ul>
                      <li
                        onClick={() => setIsOpen(false)}
                        className="font-medium text-base text-[#121212] capitalize hover:bg-gray-200 hover:bg-red hover:text-white duration-300"
                      >
                        <Link
                          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                          className="px-3 py-2 inline-block"
                          to="/login?role=student"
                        >
                          student login
                        </Link>
                      </li>
                      <li
                        onClick={() => setIsOpen(false)}
                        className="font-medium text-base text-[#121212] capitalize hover:bg-gray-200 hover:bg-red hover:text-white duration-300"
                      >
                        <Link
                           onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                          className="px-3 py-2 inline-block"
                          to="/login?role=partner"
                        >
                          Partner Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div> <div className="relative">
                <Link
             to={'/partner-registeration'}
                  className="font-medium text-base text-[#ffffff] leading-6 px-3 py-1 bg-red inline-flex capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
                >
               Franchise
                </Link>
              
              </div>
            </div>
             
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
