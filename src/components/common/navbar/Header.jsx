import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/svg/logo.svg";
import { Link, useLocation } from "react-router-dom";
import WelcomeHeader from "./WelcomeHeader";
import HeaderTabs from "./HeaderTabs";

import {
  DialerIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../Icon";
import { NoteProvider } from "../../../context/StateProvider";

const Header = () => {
  const [logoData, setLogoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch logo from API
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const res = await fetch(
          "https://pratibhaallpic.onrender.com/api/header-logo"
        );
        const data = await res.json();
        // console.log("API Response:", data);
        setLogoData(data);
      } catch (err) {
        console.error("Logo API Error:", err);
        setError("Failed to load logo.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogo();
  }, []);

  useEffect(() => {
    if (logoData) {
      console.log("logoData updated:", logoData);
    } else {
      console.log("api s image nhi a rhe");
    }
  }, [logoData]);

  const router = useLocation();
  const { showNav, setShowNav } = NoteProvider();

  document.body.style.overflowY = showNav ? "hidden" : "auto";

  return (
    <div className="w-full bg-white">
      <WelcomeHeader />

      <div className="custom_container mx-auto px-3">
        <div className="flex flex-wrap justify-between items-center lg:-translate-y-2">
          <div className="lg:w-[26%] sm:w-1/2">
            <span className="sm:w-[187px] sm:h-[104px] w-[100px] h-[60px] inline-block lg:-mt-7">
              <Link to="/" className="inline">
                <img
                  src={logoData?.image || logo}
                  alt="pite-logo"
                  className="w-full h-full object-contain"
                />
              </Link>
            </span>
          </div>

          <div className="lg:w-[74%] w-1/2 hidden lg:block">
            <div className="flex justify-between mt-3">
              <div className="lg:w-1/4 w-1/2">
                <div className="flex gap-2 group">
                  <span className="mt-2 border-[1.5px] w-9 h-9 flex items-center justify-center rounded-full p-1">
                    <DialerIcon />
                  </span>
                  <div>
                    <h2 className="font-extrabold text-gray_light text-base xl:text-lg leading-7 uppercase">
                      CALL SUPPORT
                    </h2>
                    <a
                      href="tel:+9992433353"
                      className="font-normal text-gray_light text-sm xl:text-base leading-4"
                    >
                      9992433353
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-[39%] w-1/2 hidden lg:block">
                <div className="flex gap-2 group">
                  <span className="mt-2 border-[1.5px] w-9 h-9 flex items-center justify-center rounded-full p-1">
                    <EmailIcon />
                  </span>
                  <div>
                    <h2 className="font-extrabold text-gray_light text-base leading-6 uppercase">
                      email SUPPORT
                    </h2>
                    <a
                      href="mailto:info@pratibhaiteducation.com"
                      className="font-normal text-gray_light text-sm leading-4"
                    >
                      info@pratibhaiteducation.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-[36%] w-1/2 hidden lg:block">
                <div className="flex gap-2 group">
                  <span className="mt-2 border-[1.5px] w-9 h-9 flex items-center justify-center rounded-full p-1">
                    <LocationIcon />
                  </span>
                  <div>
                    <h2 className="font-extrabold text-gray_light text-base leading-6 uppercase">
                      LOCATION SUPPORT
                    </h2>
                    <p className="font-normal text-gray_light text-sm leading-4">
                      Head Office Near Govt Sr Sec School, Mirzapur Hisar (HR),
                      Bharat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons & Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 lg:gap-11 lg:hidden">
              <div className="flex gap-1 sm:gap-2.5">
                <a
                  href="https://www.youtube.com/channel/UCDgqAiRXjp8Bx9J6vqJ0bzQ"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="https://www.facebook.com/pratibhaiteducation"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/pratibha_it_education/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FPratibhaitedu"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 social_icons"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>

            <div
              onClick={() => setShowNav(!showNav)}
              className="flex flex-col justify-between h-5 w-6 lg:hidden z-[100] relative cursor-pointer duration-300"
            >
              <span
                className={`border-[3px] w-full rounded-sm duration-300 ${
                  showNav
                    ? "translate-y-[8px] -rotate-45 border-black"
                    : "border-black"
                }`}
              ></span>
              <span
                className={`border-[3px] w-full rounded-sm duration-300 ${
                  showNav ? "rotate-45 border-black" : "border-black"
                }`}
              ></span>
              <span
                className={`border-[3px] w-full rounded-sm duration-300 ${
                  showNav ? "opacity-0 border-black" : "border-black"
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-red py-1 bg-red lg:hidden "></div>

      <div className="top-0 z-50">
        <HeaderTabs router={router} />
      </div>
    </div>
  );
};

export default Header;
