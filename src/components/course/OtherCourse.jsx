import React from "react";
// import { CartIcon, FeesIcon, TimePeriodIcon } from "../common/Icon";
import { ourCoursesData } from "../common/Helper";
import CourseCard from "../course/CourseCard";
import SearchInput from "./SearchInput";

const OtherCourse = () => {
  return (
    <>
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <SearchInput courseName="OTHER COACHING" />
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap mt-6 sm:mt-8  ">
            {ourCoursesData.slice(0, 16).map((mapData, index) => (
              <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mt-3">
                <CourseCard key={index} mapdata={mapData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherCourse;
