"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import CourseCard from "../course/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          "https://pratibhaallpic.onrender.com/api/courses"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // Validate data structure
        if (Array.isArray(data)) {
          setCourses(data);
        } else if (data && Array.isArray(data.data)) {
          setCourses(data.data);
        } else {
          console.warn("Unexpected API response structure:", data);
          setCourses([]);
        }
      } catch (err) {
        console.error("Course API Error:", err);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Display courses or fallback data
  const displayCourses =
    courses.length > 0
      ? courses.slice(0, 8)
      : [
          {
            id: 1,
            title: "Adobe After Effects",
            description:
              "Adobe After Effects Is A Powerful Software For Creating Motion Graphics And Visual Effects In Video Production.",
            price: "4500",
            duration: "3 Months",
          },
          {
            id: 2,
            title: "Adobe Photoshop",
            description:
              "Learn professional photo editing and digital art creation with Adobe Photoshop.",
            price: "3500",
            duration: "2 Months",
          },
        ];

  return (
    <div id="Courses" className="pt-14 md:pt-20 xl:pt-24 pb-[78px]">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize">
            Our Featured Courses
          </h2>
          <p className="font-normal text-lg mt-8 text-center max-w-3xl">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add.
          </p>

          {loading ? (
            <div className="mt-10 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
              <p className="mt-4 text-gray-500">Loading courses...</p>
            </div>
          ) : error ? (
            <div className="mt-10 text-center">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="w-full mt-6 sm:mt-12">
              {/* Mobile Slider */}
              <div className="block md:hidden w-full">
                <Slider {...sliderSettings}>
                  {displayCourses.map((course, index) => (
                    <div key={course.id || index} className="px-2">
                      <CourseCard mapdata={course} />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayCourses.map((course, index) => (
                  <div key={course.id || index}>
                    <CourseCard mapdata={course} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
