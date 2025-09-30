import React from "react";
import javaImage from "../assets/images/webp/bookimg.webp";
import { Download_icon } from "../components/common/Icon";

const Read = () => {
  return (
    <>
      <div className="py-12 md:py-16 lg:py-24  ">
        <div className="custom_container mx-auto px-3 md:px-5">
          <div className="flex justify-between  flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/4  px-2 mt-7">
              <img
                className=" w-full h-80 object-cover"
                src={javaImage}
                alt="javaImage"
              />
              <div className="flex justify-between items-center mt-2">
                <p className=" py-1 px-3 bg-red text-white rounded-3xl text-xs ">
                  Price -{" "}
                  <span
                    style={{
                      textDecorationLine: "line-through",
                      textDecorationThickness: "1.5px",
                    }}
                    st
                  >
                    110₹
                  </span>{" "}
                  0 ₹
                </p>
                <button className="font-bold text-base md:text-xl px-2 py-1 border border-transparent">
                  <Download_icon />
                </button>
              </div>
            </div>
            <div className="w-full sm:w-1/2  md:w-2/3 px-2 mt-7">
              <h2 className=" capitalize font-bold text-3xl">
                java programming
              </h2>
              <p className="text-[14px] mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                consequuntur fuga repellendus culpa iste. Commodi quia vero
                nihil! Possimus quaerat facilis perferendis est officiis.
                Repudiandae, adipisci architecto quidem voluptatibus quaerat
                accusantium corrupti deleniti! Ipsum ducimus deserunt odio,
                voluptates consequatur laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
