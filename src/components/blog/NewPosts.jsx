import React, { useState } from "react";
import { CalenderIcon } from "../common/Icon";
import { NewPostData } from "../common/Helper";

const NewPosts = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayedPosts, setDisplayedPosts] = useState(4);
  const handleShowMore = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setDisplayedPosts(NewPostData.length);
    } else {
      setDisplayedPosts(4);
    }
  };
  return (
    <div className="bg-[#F6F6F6] pt-10">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-center  mb-10">
          <h2 className="font-bold text-2xl lg:text-[32px] text-black uppercase">
            NEW POST
          </h2>
          <div className="border border-gray_light rounded-[50px] md:w-[470px] max-w-[470px] flex justify-between overflow-hidden">
            <label
              htmlFor="search"
              className="font-medium text-lg inline-block text-white text-center capitalize py-2 bg-gray_light px-3 sm:px-6 "
            >
              search
            </label>
            <input
              className="font-normal text-lg inline-block text-gray_light capitalize py-1 px-2 outline-none border-none w-full"
              type="search"
              id="search"
              name="search"
            ></input>
            <span className="font-medium text-lg inline-block text-white text-center capitalize py-2 bg-gray_light px-3 sm:px-6 cursor-pointer">
              go
            </span>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          {NewPostData.slice(0, displayedPosts).map((data, index) => (
            <div key={index} className="min_500:w-1/2 lg:w-1/4 px-2">
              <div className="flex items-center gap-2.5 pt-10">
                <div className="relative max-lg:w-[150px] max-w-[150px]  flex ">
                  <span className="border-[4px] font-bold text-[9px] text-white border-white bg-red rounded-full h-6 w-6 flex justify-center items-center p-1 absolute top-0 right-1/4 translate-x-1/2">
                    {index + 1}
                  </span>
                  <img
                    className="w-full h-full border-[5px] border-white rounded-full shadow-backdrop"
                    src={data.img}
                    alt="new-post"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-medium text-sm text-black/35 capitalize">
                    {data.story}
                  </span>
                  <h2 className="font-bold text-xl lg:text-2xl text-gray_light line-clamp-2">
                    {data.title}
                  </h2>
                  <p className="font-medium text-sm text-black/35 capitalize flex gap-2 items-center">
                    <CalenderIcon /> {data.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 mb-2">
          {!showAll ? (
            <button
              className="font-bold text-xl text-red capitalize"
              onClick={handleShowMore}
            >
              Show More...
            </button>
          ) : (
            <button
              className="font-bold text-xl text-red capitalize"
              onClick={handleShowMore}
            >
              Show Less...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewPosts;
