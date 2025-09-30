import React, { useState } from "react";
import PartnerSidebar from "./PartnerSidebar";
import PartnerHeader from "./PartnerHeader";
import { Outlet } from "react-router-dom";
import { partnerDesboardData } from "../common/Helper";

const PartnerDesboard = () => {
  const curruntYear = new Date();
  return (
    <div className="flex flex-col h-screen">
      <PartnerHeader />
      <div className="flex h-screen overflow-y-auto">
        <div className="w-3/12 bg-[#A9D18E] sticky top-0">
          <PartnerSidebar mapData={partnerDesboardData} />
        </div>
        <div className="w-9/12 h-full">
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

export default PartnerDesboard;
