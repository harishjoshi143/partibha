import React from "react";
import { Link } from "react-router-dom";

const StudentsZone = ({ mapData, heading }) => {
  return (
    <div className="pt-14 md:pt-20 lg:pt-24 xl:pt-[157px] pb-[78px]">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize relative">
            {heading}
          </h2>
          <p className="font-normal text-lg mt-8 text-center">
            Video provides a powerful way to help you prove your point.
          </p>
          <div className="flex flex-wrap mt-12 lg:mt-20 w-full">
            {mapData?.map((data, index) => (
              <div
                key={index}
                className="w-full min_500:w-1/2 sm:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mt-4"
              >
                <Link
                  target="_blank"
                  to={data.path || "#"}
                  className="flex flex-col justify-center items-center p-4 h-full border border-gray_light rounded-[30px] hover:shadow-backdrop duration-300 hover:border-transparent group w-3/4 min_500:w-full mx-auto"
                >
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-12 h-12 object-contain"
                  />
                  <h3 className="font-extrabold text-md text-center text-gray_light mt-2 uppercase">
                    {data.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsZone;
