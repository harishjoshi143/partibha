import React from "react";
import { DownloadIcon, SearchIcon } from "./common/Icon";
import { Link } from "react-router-dom";
import { ResultsData } from "./common/Helper";

const Results = () => {
  return (
    <div className="py-5">
      <div className="flex flex-wrap gap-5 sm:gap-0 justify-between items-center px-4 mb-10">
        <h2 className="font-semibold text-lg text-[#343434] uppercase md:py-4">
        ALL RESULTS
        </h2>
        <div className="border border-gray_light rounded-[50px] lg:w-[470px] max-w-[370px] flex items-center justify-between overflow-hidden">
          <span className="px-2">
            <SearchIcon />
          </span>
          <input
            className="font-normal text-lg inline-block text-gray_light capitalize py-1 px-2 outline-none border-none w-full"
            type="search"
            id="search"
            name="search"
          ></input>
          <span className="font-medium text-lg inline-block text-white text-center capitalize py-1 sm:py-2 bg-gray_light px-3 sm:px-6 cursor-pointer">
            go
          </span>
        </div>
      </div>

      {ResultsData.map((result, index) => (
        <div key={index} className="px-2 md:px-5">
          <span className="font-bold text-sm text-[#D81C0E] capitalize ps-2">
            {result.budge}
          </span>
          <div className="flex gap-1 md:gap-2">
            <div className="border border-black rounded-full px-3 py-2 w-full">
              <Link className="font-medium md:font-bold text-xs md:text-sm text-black !leading-2 flex">
                {result.results}
              </Link>
            </div>
            <button className="font-bold text-sm text-white text-center capitalize pe-2 md:px-8 md:py-2 md:bg-[#D81C0E] rounded-full">
              <span className="hidden md:block"> download</span>
              <span className="md:hidden block">
                {" "}
                <DownloadIcon />
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Results;
