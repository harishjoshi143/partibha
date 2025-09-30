import React from "react";
import { CalenderIcon } from "../common/Icon";
import { ReadMoreCardData } from "../common/Helper";
import SocialPlugin from "./SocialPlugin";
import Comments from "./Comments";

const ReadMoreCard = () => {
  return (
    <div className="pt-10 mt-9 pb-10">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-wrap -mx-2">
          <div className="lg:w-7/12 xl:w-8/12 px-2 pb-6">
            <h2 className="font-bold text-2xl lg:text-[32px] text-black uppercase">
              READ MORE
            </h2>
            {ReadMoreCardData.map((data, index) => (
              <div key={index} className="flex items-center gap-2.5 pt-10">
                <img
                  className="w-24 sm:w-[150px] lg:w-[200px] "
                  src={data.img}
                  alt="newspost"
                />

                <div className="flex flex-col gap-1 sm:gap-2">
                  <span className="font-medium text-xs md:text-sm text-black/35 capitalize">
                    {data.story}
                  </span>
                  <h2 className="font-bold text-base md:text-xl lg:text-2xl text-gray_light line-clamp-2">
                    {data.title}
                  </h2>
                  <p className="font-normal text-xs md:text-base capitalize text-black">
                    {data.description}
                  </p>
                  <p className="font-medium text-xs md:text-sm text-black/35 capitalize flex gap-2 items-center">
                    <CalenderIcon /> {data.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-5/12 xl:w-4/12 px-2 pb-6">
            <SocialPlugin />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreCard;
