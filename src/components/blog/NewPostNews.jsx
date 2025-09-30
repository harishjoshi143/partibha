import React from "react";
import newsPost from "../../assets/images/webp/about-img.webp";
import { CalenderIcon } from "../common/Icon";
import { blogNewsPostData } from "../common/Helper";

const NewPostNews = () => {
  return (
    <div className="pt-8 pb-12 lg:pb-20">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-wrap -mx-2">
          <div className="lg:w-7/12 px-2">
            <div className="h-full relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-end">
                <div className="flex flex-col gap-1 sm:gap-2 mb-10 ms-10 md:px-10">
                  <span className="font-medium text-sm text-white capitalize">
                    story
                  </span>
                  <h2 className="font-bold text-base sm:text-xl xl:text-2xl text-white line-clamp-2 pe-4">
                    Technology is a useful servent but a dangerous master
                  </h2>
                  <p className="font-medium text-sm text-white capitalize flex gap-2 items-center blog_current_news">
                    <CalenderIcon /> May 02, 2024
                  </p>
                </div>
              </div>
              <img
                className="w-full lg:h-[400px] object-cover rounded-[20px]"
                src={newsPost}
                alt="newspost"
              />
            </div>
          </div>
          <div className="lg:w-5/12 px-2 mt-4 lg:mt-0 overflow-auto">
            <div className=" flex flex-col gap-3 justify-between h-[400px]">
              {" "}
              {blogNewsPostData.map((obj, index) => (
                <div key={index} className="flex gap-2 items-center group">
                  <div className="overflow-clip lg:w-[240px] sm:h-[140px] h-[90px] rounded-[20px] ">
                    <img
                      className="sm:max-w-[200px] sm:h-[140px] w-[150px] h-full group-hover:scale-105 duration-300"
                      src={obj.sideimg}
                      alt="newspost"
                    />
                  </div>
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <span className="font-medium text-sm text-black/35 capitalize">
                      {obj.story}
                    </span>
                    <h2 className="font-bold text-base sm:text-xl xl:text-2xl text-gray_light line-clamp-2">
                      {obj.title}
                    </h2>
                    <p className="font-medium text-sm text-black/35 capitalize flex gap-2 items-center">
                      <CalenderIcon /> {obj.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostNews;
