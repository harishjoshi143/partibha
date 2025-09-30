import React from "react";
import { GoBackIcon } from "../common/Icon";
import { NoteProvider } from "../../context/StateProvider";
const LiveClass = () => {
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
        ASSIGNMENTS
      </h2>

      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center capitalize bg-[#A9D18E] shadow-tabsBackdrop p-1.5">
        All Assignments
      </p>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border-collapse  w-[1000px]">
          <thead>
            <tr className="bg-[#A9D18E] mb-4">
              <th className="border border-black px-4 py-2 w-4/5">
                Course Name
              </th>

              <th className="border border-gray-300 px-4 py-2">
                Live Class Link
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-4"></tr>

            <tr className="even:bg-white odd:bg-gray-100 text-center">
              <td className="border border-gray-300 px-4 py-2">
                Advance Diploma in Computer Hardware and Networking Live Class
                Start Timing 09:00 AM to 10:00 AM 10 June 2024
              </td>

              <td
                className={`border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer`}
              >
                Click hear to Live
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveClass;
