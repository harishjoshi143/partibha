import React from "react";
import { SearchIcon } from "../common/Icon";

const SearchInput = ({ courseName }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center  mb-10">
        <div>
          <h2 className="font-bold text-2xl lg:text-[32px] text-red uppercase text-center sm:text-start">
            {courseName}
          </h2>
          <p className=" w-4/5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem
            fugit aliquid atque ipsum veritatis, omnis velit exercitationem
            recusandae iste odit similique at reprehenderit architecto.
          </p>
        </div>
        <div className="border border-gray_light rounded-[50px] md:w-[500px] max-w-[500px] flex justify-between px-3 py-1.5  items-center overflow-hidden">
          <input
            className="font-normal text-lg inline-block text-gray_light capitalize bg-transparent       px-2 outline-none border-none w-full"
            type="search"
            id="search"
            name="search"
          ></input>
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
