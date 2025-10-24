import React, { useEffect, useState } from "react";
import CourseCard from "../course/CourseCard";
import SearchInput from "./SearchInput";
import { NoteProvider } from "../../context/StateProvider";

const ComputerCourse = () => {
  const { courses, loading, fetchCourses }=NoteProvider()

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <SearchInput courseName="OUR COMPUTER COURSES" />

        {loading ? (
          <p className="text-center mt-6">Loading courses...</p>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap mt-6 sm:mt-8 w-full">
              {courses?.length > 0 ? (
                courses?.slice(0, 16).map((mapData, index) => (
                  <div
                    key={mapData._id || index}
                    className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mt-3"
                  >
                    <CourseCard mapdata={mapData} />
                  </div>
                ))
              ) : (
                <p className="text-center">No courses available</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ComputerCourse;
