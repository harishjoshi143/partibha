import React from "react";
import director from "../../assets/images/png/directorimg.jpg";

const DirectorMessage = () => {
  return (
    <div className="pt-14 md:pt-20 lg:pt-24  pb-12 md:pb-16 lg:pb-32 bg-[#ccc]/60">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize relative ">
            Director message
          </h2>

          <div className="flex flex-wrap mt-12 md:mt-16 lg:mt-20 -px-4">
            <div className="w-full sm:w-8/12 mx-auto lg:w-4/12 md:px-4">
              <div className="flex items-center h-full">
                <img
                  className=" rounded-xl"
                  src={director}
                  alt="director-img"
                />
              </div>
            </div>
            <div className="lg:w-8/12 md:px-4 w-full mt-8 lg:mt-0">
              <div className="flex flex-col justify-center h-full">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray_light capitalize lg:leading-[70px]">
                  Mr. Sunil Kumar
                </h2>
                <p className="font-normal text-lg text-gray_light capitalize text-justify pt-2 pb-4 lg:py-4 leading-7">
                  Dear Students, Parents, and Educators, It is with great
                  pleasure and a profound sense of purpose that I welcome you to
                  our online learning platform Pratibha IT Education. In today's
                  ever-evolving world, education is not just a privilege but a
                  necessity. As the Director of this online education
                  initiative, I am committed to ensuring that every learner,
                  regardless of their background or geographical location, has
                  access to high-quality educational resources. Our platform is
                  designed to be a hub of knowledge, innovation, and
                  inspiration. We believe in the transformative power of
                  education to shape minds, broaden horizons, and unlock
                  countless opportunities. Through our dedicated team of
                  educators and cutting-edge technology, we aim to create an
                  immersive learning experience that fosters curiosity, critical
                  thinking, and lifelong learning. Thank you for choosing to be
                  part of our learning community. Your trust and support inspire
                  us to innovate and excel every day. Warm regards,
                </p>
                <span className="mt-3">
                  <button className="font-bold  text-base md:text-xl bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300">
                    Thanks
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

export default DirectorMessage;
