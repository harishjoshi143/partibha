import React from "react";
import ourVision from "../../assets/images/webp/our-vision.webp";

const OurVision = () => {
  return (
    <div className="pt-14 md:pt-20 lg:pt-24 xl:pt-[129px] pb-12 md:pb-16 lg:pb-24 ">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize relative ">
            our vision
          </h2>

          <div className="flex flex-wrap mt-12 md:mt-16 lg:mt-20 -px-4">
            <div className="lg:w-7/12 md:px-4 w-full mt-8 lg:mt-0">
              <div className="flex flex-col justify-center h-full">
                <h2 className="font-bold text-3xl md:text-4xl xl:text-[51px] text-gray_light capitalize lg:leading-[70px]">
                  Fostering Excellence, Igniting Possibilities.
                </h2>
                <p className="font-normal text-lg text-gray_light capitalize text-justify pt-2 pb-4 lg:py-4 leading-7">
                  We aim to provide student centered teaching and learning
                  process through online mode by the pratibha IT Education
                  Academicians as well as teachers to the students’ community
                  and we continue to update and offer the online courses for the
                  students with special reference to employability and
                  entrepreneurial opportunities for them.
                </p>
                <span className="mt-3">
                  <button className="font-bold  text-base md:text-xl bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300 ">
                    Read More
                  </button>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-8/12 mx-auto lg:w-5/12 md:px-4">
              <div className="flex items-center h-full">
                <img className="lg:ps-4" src={ourVision} alt="ourVision-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
