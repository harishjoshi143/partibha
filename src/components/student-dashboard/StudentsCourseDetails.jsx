import React from "react";
import { NoteProvider } from "../../context/StateProvider";
import { GoBackIcon } from "../common/Icon";
const StudentsCourseDetails = () => {
  const { setDashboardSidebar } = NoteProvider();
  return (
    <div className="px-5 sm:px-10">
      <h2 className="font-semibold text-lg text-[#343434] uppercase py-4 border-b-2 border-black flex items-center gap-2">
        <span
          onClick={() => setDashboardSidebar(true)}
          className="sm:hidden block"
        >
          <GoBackIcon />
        </span>{" "}
        COURSE DETAILS
      </h2>

      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center capitalize bg-[#A9D18E] shadow-tabsBackdrop p-1.5">
        All Courses and Diploma Programs
      </p>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse  w-[1000px]">
          <thead>
            <tr className="bg-[#A9D18E] mb-4">
              <th className="border border-black px-4 py-2">Course Code</th>
              <th className="border border-black px-4 py-2">Course Name</th>
              <th className="border border-black px-4 py-2">Duration</th>
              <th className="border border-black px-4 py-2">Course Fee</th>
              <th className="border border-black px-4 py-2"></th>
              {/* <th className="border border-gray-300 px-4 py-2">
                    {course.link}
                  </th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="h-4"></tr>

            <tr className="even:bg-white odd:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">PITE9224001</td>
              <td className="border border-gray-300 px-4 py-2">
                Computer Basic
              </td>
              <td className="border border-gray-300 px-4 py-2">2 Months</td>
              <td className="border border-gray-300 px-4 py-2">2000.0 ₹</td>
              <td className={`border border-gray-300 px-4 py-2 `}>
                Registered
              </td>
              {/* <td
                      className={`border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer ${course.linkStyling}`}
                    >
                      {course.link}
                    </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsCourseDetails;
