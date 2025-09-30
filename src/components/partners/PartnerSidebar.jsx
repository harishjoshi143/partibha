import React from "react";
import partnerProfile from "../../assets/images/svg/partner-profile.svg";
import { Link } from "react-router-dom";
import { NoteProvider } from "../../context/StateProvider";

const PartnerSidebar = ({ mapData }) => {
  const { dashboardSidebar, setDashboardSidebar } = NoteProvider();

  return (
    <div className="h-full">
      <div className="py-2.5 flex flex-col items-center pb-2.5 border-b border-[#4058307A]">
        <img src={partnerProfile} alt="profile-img" />
        <h2 className="font-bold text-sm sm:text-base text-[#BC0402] uppercase pt-2 text-center">
          SUNIL KUMAR
        </h2>
        <h3 className="font-medium text-xs sm:text-sm text-[#343434] text-center">
          ALC Name
        </h3>
        <p className="font-medium text-xs sm:text-sm text-[#343434] text-center">
          GD Computer Center
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        {mapData.map((tabs, index) => (
          <Link
            onClick={() => setDashboardSidebar(false)}
            key={index}
            to={tabs.path}
            className="font-semibold text-[10px] sm:text-sm text-center text-[#343434] uppercase w-full py-0.5 bg-[#00000040] shadow-tabsBackdrop mb-2"
          >
            {tabs.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PartnerSidebar;
