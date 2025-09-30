import React, { useState } from "react";
import { CalenderIcon } from "../common/Icon";
import { NewPostData } from "../common/Helper";

const NewTech = () => {
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
        <h2 className="font-bold text-2xl lg:text-[32px] text-black uppercase">
          NEW COMPUTER TECHNOLOGY
        </h2>

        <div className="flex flex-wrap -mx-2 ">
          {NewPostData.slice(0, displayedPosts).map((data, index) => (
            <div key={index} className="min_500:w-1/2 lg:w-1/4 px-2  pt-10">
              <div className="flex flex-col gap-2.5 group hover:shadow-backdrop duration-300 rounded-[20px] pb-3">
                <div className="overflow-hidden rounded-[20px] w-full">
                  <img
                    className="w-full min-h-[300px] object-cover rounded-[20px] duration-300 group-hover:scale-110"
                    src={data.img}
                    alt="new-post"
                  />
                </div>

                <h2 className="font-bold text-xl lg:text-2xl text-gray_light line-clamp-2 px-2">
                  {data.title}text-xl md:text-2xl
                </h2>
                <p className="font-medium text-sm text-black/35 capitalize flex gap-2 items-center px-2">
                  <CalenderIcon /> {data.date}
                </p>
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
export default NewTech;
