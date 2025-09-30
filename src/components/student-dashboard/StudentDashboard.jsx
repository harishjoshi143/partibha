import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { studentDesboardData } from "../common/Helper";
import PartnerHeader from "../partners/PartnerHeader";
import PartnerSidebar from "../partners/PartnerSidebar";
import { NoteProvider } from "../../context/StateProvider";

const StudentDashboard = () => {
  const curruntYear = new Date();
  const { dashboardSidebar } = NoteProvider();

  return (
    <div className="flex flex-col h-screen">
      <PartnerHeader />
      <div className="flex h-full relative">
        <div
          className={`sm:w-3/12 bg-[#A9D18E] max-sm:fixed top-0 duration-300 h-screen w-screen ${
            !dashboardSidebar ? "-left-full" : "left-0"
          }`}
        >
          <PartnerSidebar mapData={studentDesboardData} />
        </div>
        <div className="w-full sm:w-9/12 h-full overflow-auto">
          <Outlet />
        </div>
      </div>
      <div className="flex items-center gap-2 flex-col lg:flex-row justify-between bg-[#343434] py-3 px-5">
        <p className="font-normal text-base sm:text-xl text-white text-center lg:text-start">
          &copy; 2023-{curruntYear.getFullYear()} Pratibha IT Education , inc,
          All Right Reserved
        </p>
        <div className="flex gap-5">
          <p className="font-normal text-xs sm:text-base text-white hover:text-[#BC0402] duration-300">
            Privacy Policy
          </p>
          <p className="font-normal text-xs sm:text-base text-white hover:text-[#BC0402] duration-300">
            Terms and Condition
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
