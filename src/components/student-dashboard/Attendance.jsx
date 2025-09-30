import React from "react";
import { NoteProvider } from "../../context/StateProvider";
import { GoBackIcon } from "../common/Icon";
const Attendance = () => {
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
        ATTENDANCE
      </h2>

      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center capitalize bg-[#A9D18E] shadow-tabsBackdrop p-1.5">
        Attendance Calendar
      </p>
    </div>
  );
};

export default Attendance;
