import React from "react";
import { CartIcon, FeesIcon, TimePeriodIcon } from "../common/Icon";
import { useAuth } from "../../context/AuthContext";

const CourseCard = ({ mapdata }) => {
  const { handlePayment } = useAuth();

  let imageUrl = "";

  if (typeof mapdata?.image === "string") {
    // Case 1: image is a string
    imageUrl = mapdata.image.startsWith("https")
      ? mapdata.image
      : `https://pratibhaallpic.onrender.com/uploads/${mapdata.image}`;
  } else if (mapdata?.image?.url) {
    // Case 2: image is an object with url
    imageUrl = mapdata.image.url;
  }

  return (
    <div className="flex flex-col p-3 border border-gray_light rounded-[30px] hover:shadow-backdrop duration-300 hover:border-transparent group ">
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="w-full aspect-[4/3] overflow-hidden rounded-[30px]">
            {mapdata.image ? (
              <img
                src={imageUrl}
                alt={mapdata.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                No image
              </div>
            )}
          </div>
        </div>

        {/* Content Section - Takes remaining space */}
        <div className="flex flex-col flex-1 mt-2">
          <div>
            {/* Title */}
            <h3 className="font-extrabold text-base text-center text-gray_light uppercase line-clamp-2 min-h-[2.5rem]">
              {mapdata.title}
            </h3>

            {/* Description */}
            <p className="font-normal text-sm text-gray_light text-center mt-1 capitalize line-clamp-2 min-h-[2.5rem]">
              {mapdata.description}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-3">
            {/* Fees & Duration */}
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-1">
                <span>
                  <FeesIcon />
                </span>
                <p className="font-extrabold text-base text-gray_light">
                  {mapdata.price}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <TimePeriodIcon />
                </span>
                <p className="font-extrabold text-base text-gray_light">
                  {mapdata.duration}
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-3">
              <button
                onClick={() => handlePayment()}
                className="font-normal text-sm text-white leading-6 px-2 py-2 bg-red flex items-center gap-2 capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent group-hover:border-red group-hover:text-red group-hover:bg-transparent duration-300 w-full justify-center text-center group/item"
              >
                <CartIcon />
                Click Here to Buy Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
