import React from "react";
import { Link } from "react-router-dom";
import { NoteProvider } from "../../context/StateProvider";
import { GoBackIcon } from "../common/Icon";

const ResultsAndCertificate = () => {
  const { setDashboardSidebar } = NoteProvider();
  return (
    <div>
      <h2 className="font-semibold text-lg text-[#343434] uppercase px-4 py-4 border-b-2 border-black flex items-center gap-2">
        <span
          onClick={() => setDashboardSidebar(true)}
          className="sm:hidden block"
        >
          <GoBackIcon />
        </span>{" "}
        RESULTS AND CERTIFICATES
      </h2>
      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center capitalize bg-[#A9D18E] shadow-tabsBackdrop p-1.5">
        Results
      </p>
      <div className="flex flex-wrap justify-center my-14 px-6 ">
        {[1, 3, 4, 5].map((items, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/12 p-2 min-h-[115px]"
          >
            <Link to={`${items.path}`}>
              {" "}
              <div className=" px-4 py-5 h-full flex items-center justify-center bg-[#C5E0B4] rounded-[18px] shadow-backdrop">
                <h2 className="font-extrabold text-base text-[#343434] uppercase text-center">
                  COMPUTER BASIC RESULT
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center capitalize bg-[#A9D18E] shadow-tabsBackdrop p-1.5">
        Certificates
      </p>
      <div className="flex flex-wrap justify-center my-14 px-6 ">
        {[1, 3, 4, 5].map((items, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/12 p-2 min-h-[115px]"
          >
            <Link to={`${items.path}`}>
              {" "}
              <div className=" px-4 py-5 h-full flex items-center justify-center bg-[#C5E0B4] rounded-[18px] shadow-backdrop">
                <h2 className="font-extrabold text-base text-[#343434] uppercase text-center">
                  COMPUTER BASIC RESULT
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsAndCertificate;
