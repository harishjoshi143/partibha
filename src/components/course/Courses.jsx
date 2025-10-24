




import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { NoteProvider } from "../../context/StateProvider";
import CategoryCoursesPage from "./CategoryCoursesPage";

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
  const { courses, loading, fetchCourses } = NoteProvider();

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div
      id="coursesUniversity"
      className="pt-14 md:pt-20 lg:pt-24 xl:pt-[157px] pb-12 md:pb-20 xl:pb-32"
    >
      <div className="custom_container mx-auto px-3 md:px-5">
        {!shouldHide && (
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize relative">
              explore top courses
            </h2>

            {loading ? (
              <p className="mt-10 text-center text-gray-500">Loading...</p>
            ) : (
              <div className="flex flex-wrap mt-12 lg:mt-20 w-full">
                {courses?.map((item, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 xl:w-1/4 px-2 mt-4"
                  >
                    <Link
                      to={`/our-courses/${item.slug ||
                        item.categoryName
                          ?.toLowerCase()
                          .replace(/\s+/g, "-") ||
                        "computer-course"}`}
                      state={{ category: item }} // 👈 send data here
                      className="relative flex flex-col justify-center items-center rounded-[30px] hover:shadow-backdrop duration-300 group overflow-hidden cursor-pointer h-[150px]"
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 bg-black/50 opacity-60 group-hover:opacity-100 z-10 duration-300"></div>

                      {/* Text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center px-2 z-[11] text-center">
                        <h2 className="font-bold text-2xl text-white capitalize truncate">
                          {item.name}
                        </h2>
                        <p className="font-normal text-md text-white capitalize truncate">
                          {item.courses?.length || 0}{" "}
                          {item.courses?.length === 1
                            ? "Course"
                            : "Courses"}
                        </p>
                      </div>

                      {/* Image */}
                      
                        <img
                          className="w-full h-full object-cover rounded-[30px] group-hover:scale-110 duration-300"
                          src={item.image}
                          alt={item.categoryName}
                        />
                   
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Route to show filtered courses */}
      <Routes>
        <Route path=":slug" element={<CategoryCoursesPage />} />
      </Routes>
    </div>
  );
};

export default Courses;

