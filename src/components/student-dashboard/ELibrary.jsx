import React from "react";
import eBookImg from "../../assets/images/png/e-book-img.png";
import recordedLecture from "../../assets/images/png/recorded-lectures-img.png";

import { Link } from "react-router-dom";
import { GoBackIcon } from "../common/Icon";
import { NoteProvider } from "../../context/StateProvider";
const ELibrary = () => {
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
        E-Books
      </p>
      <div className="flex justify-center mt-6">
        <div className="xl:w-10/12">
          <div className="flex flex-wrap justify-between">
            {[1, 1, 1, 1].map((ebook, index) => (
              <div key={index} className="w-full sm:w-5/12 xl:w-1/4 mt-5">
                <img className="w-full" src={eBookImg} alt="e-book" />
                <div className="flex justify-between items-center px-3">
                  <h3 className="font-bold text-[10px] text-black capitalize">
                    Java Programming
                  </h3>{" "}
                  <Link className="border border-black rounded-full py-1 px-3 font-normal text-[9px]">
                    Read
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center capitalize bg-[#A9D18E] shadow-tabsBackdrop p-1.5 my-5">
        Recorded Video Lecture
      </p>
      <div className="flex justify-center mt-6">
        <div className="xl:w-10/12">
          <div className="flex flex-wrap justify-between">
            {[1, 1, 1].map((ebook, index) => (
              <div key={index} className="w-full sm:w-6/12 xl:w-1/3 mt-5">
                <img className="w-full" src={recordedLecture} alt="e-book" />
                <h3 className="font-bold text-base lg:text-lg text-center text-black capitalize">
                  Computer Basic Videos
                </h3>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELibrary;
