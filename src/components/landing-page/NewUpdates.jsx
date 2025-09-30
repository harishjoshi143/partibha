import React, { useEffect, useRef, useState } from "react";
import { newUpdates } from "../common/Helper";
import { DownArrowIcon, UpperArrowIcon } from "../common/Icon";

const NewUpdates = () => {
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
    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
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
  const handleMouseEnter = () => {
    setIsAutoplayPaused(true);
    clearInterval(autoplayInterval);
  };

  const handleMouseLeave = () => {
    setIsAutoplayPaused(false);
    const interval = setInterval(scrollDown, 15); // Resume autoplay
    setAutoplayInterval(interval);
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
    <div className="bg-gray relative ">
      <div className="absolute right-5 lg:right-7 top-7 flex-col justify-between h-[330px] hidden sm:flex">
        <span onClick={scrollUp} className="cursor-pointer">
          <UpperArrowIcon />
        </span>
        <span onClick={scrollDown} className="cursor-pointer">
          <DownArrowIcon />
        </span>
      </div>
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-wrap">
          <div className="sm:w-1/6 w-full sticky top-1">
            <div className="h-full flex items-center justify-center pt-6 sm:pt-0 w-full relative sm:after:absolute sm:after:h-[70%] after:w-1 after:bg-gray_white after:-right-4 after:top-1/2 after:-translate-y-1/2">
              <h2 className="font-bold text-2xl text-white leading-7 text-center uppercase relative max-sm:after:absolute after:h-0.5 after:w-full after:bg-white after:left-0 after:bottom-0">
                NEWS UPDATES
              </h2>
            </div>
          </div>
          <div
            className="sm:w-10/12 sm:ps-14 md:ps-24  h-[370px] overflow-auto mt-3"
            ref={updatesRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="h-full flex flex-col justify-center py-2 mt-8 sm:mt-14 sm:pe-10">
              {newUpdates.map((update, index) => (
                <div key={index} className="py-2">
                  <h2 className="font-bold text-lg sm:text-xl text-white leading-7 inline relative line-clamp-1">
                    {update.heading}
                  </h2>
                  <p className="font-light text-sm sm:text-base text-white leading-5 capitalize mt-2 line-clamp-2">
                    {update.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUpdates;
