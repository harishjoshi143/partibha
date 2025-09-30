import React from "react";
// import { CartIcon, FeesIcon, TimePeriodIcon } from "../common/Icon";
import { ourCoursesData, universitiesData } from "../common/Helper";
import CourseCard from "../course/CourseCard";
import SearchInput from "./SearchInput";

const UnivarsityProgram = () => {
  return (
    <>
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <SearchInput courseName="ONLINE UNIVERSITY PROGRAMS " />

        <div className="flex flex-wrap justify-between mt-6">
          <div className=" flex flex-wrap items-center justify-start gap-4 mt-6 sm:mt-8 overflow-y-scroll h-36 px-7 py-2 rounded-md shadow-md ">
            {universitiesData.map((items, index) => (
              <h2
                key={index}
                className="font-bold text-base md:text-xl bg-gray_light leading-6 px-6 py-2 text-white flex whitespace-nowrap capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300 overflow-auto  "
              >
                {items.name}
              </h2>
            ))}
          </div>
          <div className="w-full  mt-6 sm:mt-8">
            <div className="flex flex-wrap ">
              {ourCoursesData.slice(0, 8).map((mapData, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mt-3">
                  <CourseCard key={index} mapdata={mapData} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default UnivarsityProgram;
