import React, { useEffect, useState } from "react";
import { CoursesData } from "../common/Helper";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ComputerCourse from "./ComputerCourse";
import HkclCourse from "./HkclCourse";
import SeoProgram from "./SeoProgram";
import VocationalCourse from "./VocationalCourse";
import OtherCourse from "./OtherCourse";
import CouchingCourse from "./CouchingCourse";
import UnivarsityProgram from "./UnivarsityProgram";
import AcademicCourse from "./AcademicCourse";

const Courses = () => {
  const location = useLocation();
  const hiddenPaths = [
    "/our-courses/computer-course",
    "/our-courses/hkcl-course",
    "/our-courses/academic-course",
    "/our-courses/university-course",
    "/our-courses/couching-course",
    "/our-courses/other-course",
    "/our-courses/vocational-course",
    "/our-courses/seo-course",
  ];
  const shouldHide = hiddenPaths.includes(location.pathname);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataLength = data.length;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://pratibha-logo.onrender.com/api/v1/courses"
        );
        const data = await response.json();

        console.log("Fetched Data:", data.data);

        setData(data?.data || []);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div
      id="coursesUniversity"
      className="pt-14 md:pt-20 lg:pt-24 xl:pt-[157px] pb-12 md:pb-20 xl:pb-32"
    >
      <div className="custom_container mx-auto px-3 md:px-5 ">
        {!shouldHide && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize relative ">
              explore top courses
            </h2>

            <div className="flex flex-wrap mt-12 lg:mt-20">
              {data?.map((data, index) => (
                <div key={index} className="w-full sm:w-1/2 xl:w-1/4 px-2 mt-4">
                  <Link
                    to={"/our-courses/computer-course"}
                    className="relative flex flex-col justify-center items-center rounded-[30px] hover:shadow-backdrop duration-300 group overflow-hidden cursor-pointer h-[150px]"
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-2 bg-black/50 opacity-60 group-hover:opacity-100 z-10 duration-300"></div>

                    {/* Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-2 z-[11] text-center">
                      <h2 className="font-bold text-2xl text-white capitalize truncate">
                        {data.categoryName}
                      </h2>
                      <p className="font-normal text-md text-white capitalize truncate">
                        {dataLength} Courses  
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-full h-full overflow-hidden rounded-[30px]">
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 duration-300"
                        src={data.imageCategory.url}
                        alt="ai-img"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/computer-course" element={<ComputerCourse />} />
        <Route path="/hkcl-course" element={<HkclCourse />} />
        <Route path="/academic-course" element={<AcademicCourse />} />
        <Route path="/university-course" element={<UnivarsityProgram />} />
        <Route path="/couching-course" element={<CouchingCourse />} />
        <Route path="/other-course" element={<OtherCourse />} />
        <Route path="/vocational-course" element={<VocationalCourse />} />
        <Route path="/seo-course" element={<SeoProgram />} />
      </Routes>
    </div>
  );
};

export default Courses;
