/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/svg/footer-logo.svg";
import {
  DialerIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  TwitterIcon,
  YouTubeIcon,
} from "./Icon";
import { headerTabsData } from "./Helper";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const router = useLocation();
  const presentYear = new Date().getFullYear();
  const previousYear = presentYear - 1;
  const updatesRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  useEffect(() => {
    // Start autoplay
    const interval = setInterval(scrollDown, 15); // Adjust autoplay speed here
    setAutoplayInterval(interval);

    // Clean up function to clear interval on component unmount
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollUp = () => {
    clearInterval(autoplayInterval); // Stop autoplay when arrow is clicked
    if (updatesRef.current) {
      updatesRef.current.scrollBy({
        top: -15, // Adjust scroll speed here
        behavior: "smooth",
      });
    }
  };

  const scrollDown = () => {
    clearInterval(autoplayInterval); // Stop autoplay when arrow is clicked
    if (updatesRef.current) {
      const updatesDiv = updatesRef.current;
      const isAtBottom =
        updatesDiv.scrollHeight - updatesDiv.clientHeight <=
        updatesDiv.scrollTop + 1;
      updatesDiv.scrollBy({
        top: 15, // Adjust scroll speed here
        behavior: "smooth",
      });
      // Reset scroll position to the top when it reaches the bottom
      if (isAtBottom) {
        setTimeout(() => {
          updatesDiv.scrollTo({ top: 0, behavior: "auto" });
        }, 1000); // Delay before resetting scroll position
      }
    }
  };
  return (
    <div className="bg-gray_light pt-3">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-wrap justify-between -mx-3">
          <div className="lg:w-[60%] w-full px-3">
            <div className="flex flex-col items-center lg:items-start lg:pe-10">
              <div className="w-[187px] h-[104px] relative after:absolute after:w-[55px] after:h-0.5 after:bg-white inline-block after:right-[60%] after:-bottom-0 before:absolute before:w-[55px] before:h-0.5 before:bg-white before:left-[60%] before:bottom-0 ">
                <Link
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  to="/"
                >
                  <img src={logo} alt="logo" />
                </Link>
                <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-1 "></span>
              </div>
              <p className="font-normal text-base text-white text-justify pt-6">
                Video provides a powerful way to help you prove your point. When
                you click Online Video, you can paste in the embed code for the
                video you want to add. You can also type a keyword to search
                online for the video that best fits your document. To make your
                document look professionally produced, Word provides header,
                footer, cover page, and text box designs that complement each
                other. For example, you can add a matching cover page, header,
                and sidebar. Click Insert and then choose the elements you want
                from the different galleries.
              </p>
            </div>
          </div>
          {/* <div className="xl:w-[28%] md:w-5/12 w-full px-3">
            <div>
              <div className="flex items-end pb-8 relative after:absolute w-[180px] h-[141px] after:w-[55px] after:h-0.5 after:bg-white after:right-[60%] after:bottom-4 before:absolute before:w-[55px] before:h-0.5 before:bg-white before:left-[60%] before:bottom-4">
                <h2 className="font-bold text-xl text-white uppercase text-nowrap">
                  RECENT UPDATES
                </h2>
                <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 bottom-3 "></span>
              </div>
              <div className="relative md:after:absolute after:w-0.5 after:h-full after:bg-white after:-right-16 xl:after:-right-20 after:top-0 xl:before:absolute before:w-0.5 before:h-full before:bg-white before:-left-12 before:top-0">
                <div className="absolute -right-10 xl:-right-14 top-7 flex-col justify-between h-[280px] hidden md:flex">
                  <span
                    onClick={scrollUp}
                    className="cursor-pointer footer_updown_arrows"
                  >
                    <UpperArrowIcon />
                  </span>
                  <span
                    onClick={scrollDown}
                    className="cursor-pointer footer_updown_arrows"
                  >
                    <DownArrowIcon />
                  </span>
                </div>
                <div
                  className="h-[315px]  overflow-auto "
                  ref={updatesRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {footerNewsData.map((news, index) => (
                    <div
                      key={index}
                      className="font-normal text-base text-white mt-2"
                    >
                      <h3 className="font-extrabold text-xl text-white capitalize">
                        {news.heading}
                      </h3>
                      <p className="font-normal text-base text-white mt-2">
                        {news.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <div className="lg:w-[40%] md:w-1/2 w-full px-3">
            <div>
              <div className="flex items-end justify-center pb-8 relative after:absolute w-[180px] h-[141px] after:w-[55px] after:h-0.5 after:bg-white after:right-[60%] after:bottom-4 before:absolute before:w-[55px] before:h-0.5 before:bg-white before:left-[60%] before:bottom-4">
                <h2 className="font-bold text-xl text-white uppercase">
                  QUICK CONTACT
                </h2>
                <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 bottom-3 "></span>
              </div>
              <div className="font-normal text-base text-white mt-2 flex flex-col gap-3">
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="footer_icons">
                    <DialerIcon />{" "}
                  </span>
                  <a
                    className="font-normal text-sm sm:text-base text-white hover:text-red duration-300"
                    href="tel:9992433353"
                  >
                    9992433353
                  </a>
                  {/* <a
                    className="font-normal text-sm sm:text-base text-white hover:text-red duration-300"
                    href="tel:9992433353"
                  >
                    9992433353
                  </a> */}
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="footer_icons">
                    <EmailIcon />{" "}
                  </span>
                  <a
                    className="font-normal text-base sm:text-base text-white flex-wrap hover:text-red duration-300"
                    href="mailto:info@pratibhaiteducation.com"
                  >
                    info@pratibhaiteducation.com
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="footer_icons">
                    <LocationIcon />{" "}
                  </span>
                  <a
                    // href="https://maps.app.goo.gl/3Y2X2JLTgg7fFyQ87"
                    target="_blank"
                    rel="noreferrer"
                    className="font-normal text-sm sm:text-base text-white"
                  >
                    3rd Floor, Rama Complex, Parijat Chowk, Hisar (HR) 125001
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-11 mt-12">
            <div className="flex justify-center lg:justify-start flex-wrap gap-5">
              {headerTabsData.map((obj, index) => (
                <Link
                  key={index}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  to={`${obj.path}`}
                  className={`font-normal hover:!text-[#E70000] text-white duration-300 text-base xl:text-lg lg:leading-7 uppercase ${
                    router.pathname === obj.path ? " !text-[#E70000]" : ""
                  }`}
                >
                  {obj.tabName}
                </Link>
              ))}
            </div>
            <div className="flex gap-1 sm:gap-2.5">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 footer_social_icons"
              >
                <YouTubeIcon />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 footer_social_icons"
              >
                <FacebookIcon />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 footer_social_icons"
              >
                <InstagramIcon />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="flex w-8 h-8 justify-center items-center border-2 border-white rounded-full hover:border-red duration-300 footer_social_icons"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282626] py-4 mt-8">
        <div className="custom_container mx-auto px-3 md:px-5 ">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center ">
            <p className="text-white font-normal text-base text-center md:text-start">
              &#169; {previousYear}-{presentYear} Pratibha IT Education , inc,
              All Right Reserved
            </p>

            <div className="flex gap-3 lg:gap-6">
              <a
                className="font-normal text-base text-white hover:text-red duration-300"
                href="/"
              >
                Privacy Policy
              </a>
              <a
                className="font-normal text-base text-white hover:text-red duration-300"
                href="/"
              >
                Terms and Condition
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
