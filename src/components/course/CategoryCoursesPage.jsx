



import React, { useEffect, useState } from "react";
import CourseCard from "../course/CourseCard";
import SearchInput from "./SearchInput";
import { NoteProvider } from "../../context/StateProvider";
import { useLocation, useNavigate } from "react-router-dom";

const CategoryCoursesPage = () => {
    const { courses, loading, fetchCourses } = NoteProvider();
    const location = useLocation();
    const navigate = useNavigate();
    const categoryData = location.state?.category;

    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    // 🔥 filter courses based on selected category
    useEffect(() => {
        if (categoryData && categoryData.courses) {
            setFilteredCourses(categoryData.courses);
        } else if (!categoryData && courses?.length > 0) {
            // If page is refreshed (no state available)
            // try to match category via slug from URL
            const slug = location.pathname.split("/").pop();
            const matchedCategory = courses.find(
                (cat) =>
                    cat.slug === slug ||
                    cat.categoryName?.toLowerCase().replace(/\s+/g, "-") === slug
            );
            if (matchedCategory) {
                setFilteredCourses(matchedCategory.courses);
            }
        }
    }, [categoryData, courses, location.pathname]);

    if (!categoryData && !filteredCourses?.length && !loading) {
        return (
            <div className="text-center mt-20">
                <p className="text-gray-500 text-lg mb-4">
                    No category data found. Please go back and select a category again.
                </p>
                <button
                    onClick={() => navigate("/our-courses")}
                    className="px-6 py-2 bg-[#E70000] text-white rounded-full hover:bg-red-700 transition duration-300"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="custom_container mx-auto px-3 md:px-5">
                <SearchInput
                    courseName={`Our ${categoryData?.categoryName ||
                        filteredCourses[0]?.categoryName ||
                        "Courses"
                        }`}
                />

                {loading ? (
                    <p className="text-center mt-6">Loading courses...</p>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="flex flex-wrap mt-6 sm:mt-8 w-full">
                            {filteredCourses?.length > 0 ? (
                                filteredCourses.slice(0, 16).map((mapData, index) => (
                                    <div
                                        key={mapData._id || index}
                                        className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2 mt-3"
                                    >
                                        <CourseCard mapdata={mapData} />
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">
                                    No courses available in this category.
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CategoryCoursesPage;
