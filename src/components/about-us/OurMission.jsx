import React from "react";
import ourMission from "../../assets/images/webp/our-misson-img.webp";

const OurMission = () => {
  return (
    <div className="pt-14 md:pt-20 lg:pt-24 xl:pt-[129px] pb-12 md:pb-16 lg:pb-24 bg-[#ccc]/60">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize relative ">
            our mission
          </h2>

          <div className="flex flex-wrap mt-12 md:mt-16 lg:mt-20 -px-4">
            <div className="w-full sm:w-8/12 mx-auto lg:w-5/12 md:px-4">
              <div className="flex items-center h-full">
                <img
                  className="lg:pe-4"
                  src={ourMission}
                  alt="ourMission-img"
                />
              </div>
            </div>
            <div className="lg:w-7/12 md:px-4 w-full mt-8 lg:mt-0">
              <div className="flex flex-col justify-center h-full">
                <h2 className="font-bold text-3xl md:text-4xl xl:text-[51px] text-gray_light capitalize lg:leading-[70px]">
                  Empowering Knowledge, Connecting Futures.
                </h2>
                <p className="font-normal text-lg text-gray_light capitalize text-justify pt-2 pb-4 lg:py-4 leading-7">
                  Our vision is to provide the knowledge and skill development
                  online courses in science and technology to the students’
                  community and to make them as a skilled and knowledgeable
                  citizen towards the development of our country
                </p>
                <span className="mt-3">
                  <button className="font-bold  text-base md:text-xl bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300">
                    Read More
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
