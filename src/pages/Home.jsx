import React from "react";
import NewUpdates from "../components/landing-page/NewUpdates";
import OurCourses from "../components/landing-page/OurCourses";
import OurTeam from "../components/landing-page/OurTeam";
import OurPartner from "../components/landing-page/OurPartner";
import CountUp from "../components/CountUp";
import { servicesList, stats } from "../components/common/Helper";
import { BookIcon, HeadPhoneIcon } from "../components/common/Icon";
import cloudComputer from "../assets/images/png/cloud-computer.png";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      {/* <NewUpdates /> */}
      <div className="bg-[#323232] py-5">
        <div
          className={`relative z-10 flex overflow-x-auto gap-2 sm:gap-5 justify-between -translate-y-[80px]`}
        >
          <Marquee
            className="h-[130px]"
            speed={50}
            gradient={false}
            pauseOnHover={true}
          >
            {servicesList.map((obj, index) => (
              <div
                key={index}
                className="flex flex-col justify-between  gap-2 items-center border border-[#0d0d0d]/40 bg-white p-5 rounded-xl w-[200px] ms-4 h-[130px]"
              >
                <span>{obj.icon}</span>
                <h3 className="text-base capitalize text-center">
                  {obj.title}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
        <div className="custom_container mx-auto px-3 md:px-5 text-center">
          <div className="flex flex-col sm:flex-row justify-between gap-5 text-white -mt-12">
            <div className="flex gap-2 items-center ">
              {/* <img className="w-10 h-10" src="" alt="not availble" /> */}
              <BookIcon />
              <h3>
                Best In Class <br />
                Curriculum
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <HeadPhoneIcon />
              <h3>
                Placement <br /> Assistance
              </h3>
            </div>
            <div className="flex gap-2 items-center">
              <img width={40} height={40} src={cloudComputer} alt="cloud" />
              <h3>
                100% <br /> Online
              </h3>
            </div>
          </div>
        </div>
      </div>
      <OurCourses />
      <div className="bg-[#323232] py-5 ">
        <div className="custom_container mx-auto px-3 md:px-5 text-center">
          <div className={`relative z-10 flex flex-wrap justify-center`}>
            {stats.map((stat) => (
              <div key={stat.id} className="w-full xl:w-1/4 sm:w-1/2 p-3">
                <div className="text-center flex gap-5 items-center justify-center bg-white p-5 rounded-xl shadow-[0_-2px_15px_rgba(0,0,0,0.2)] h-full">
                  <span>{stat.icon}</span>
                  <div className="flex flex-col items-center w-[112px]">
                    <h2 className="text-black text-3xl sm:text-4xl font-bold">
                      {stat.prefix}
                      <CountUp end={stat.end} duration={3000} />
                      {stat.suffix}
                    </h2>
                    <p className="text-sm font-semibold text-black/80 sm:mt-2">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OurTeam />
      <OurPartner />
      <div className="bg-[#ccc]/60 py-12">
        <div className="custom_container mx-auto px-3 md:px-5 text-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize">
            Our Prime Recruiters
          </h2>
          <p className="font-normal text-lg mt-8 text-center ">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add.
          </p>
          <div className=" pt-5 flex flex-col items-center gap-5 mt-10">
            <Marquee
              direction="right"
              speed={50}
              gradient={false}
              pauseOnHover={true}
            >
              {servicesList.map((obj, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between  gap-2 items-center  p-2 rounded-xl w-[200px] ms-4 "
                >
                  <span>{obj.icon}</span>
                </div>
              ))}
            </Marquee>
            <Marquee
              direction="left"
              speed={50}
              gradient={false}
              pauseOnHover={true}
            >
              {servicesList.map((obj, index) => (
                <div
                  key={index}
                  className="lex flex-col justify-between  gap-2 items-center  p-2 rounded-xl w-[200px] ms-4 "
                >
                  <span>{obj.icon}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
