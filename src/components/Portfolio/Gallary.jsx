import React, { useState } from "react";
import { gallryData } from "../common/Helper";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Marquee from "react-fast-marquee";
import video from "../../assets/video/video.mp4";

const Gallary = () => {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (isLightboxOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div id="gallary" className="pt-14 xl:pt-[72px] pb-24 bg-white">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-red capitalize ">
            Gallery
          </h2>
          <p className="font-normal text-lg mt-8 text-center mb-12">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add.
          </p>

          {/* First Marquee for Images */}
          <Marquee direction="right" className="w-full">
            <div className="w-full flex justify-around">
              {gallryData.map((data, index) => (
                <div
                  key={index}
                  className="w-[150px] sm:w-[200px] px-1 mt-4"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    className="w-full duration-300 h-[150px] cursor-pointer"
                    src={data.img}
                    alt={`gallery-${index}`}
                  />
                </div>
              ))}
            </div>
          </Marquee>

          {/* Second Marquee for Video */}
          <Marquee direction="left" className="w-full mt-6">
            <div className="w-full flex justify-around">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="w-[200px] sm:w-[300px] px-1 mt-2">
                  <video
                    className="w-full duration-300 aspect-16/9"
                    src={video}
                    muted
                    autoPlay
                    loop
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          mainSrc={gallryData[lightboxIndex].img}
          nextSrc={gallryData[(lightboxIndex + 1) % gallryData.length].img}
          prevSrc={
            gallryData[
              (lightboxIndex + gallryData.length - 1) % gallryData.length
            ].img
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setLightboxIndex(
              (lightboxIndex + gallryData.length - 1) % gallryData.length
            )
          }
          onMoveNextRequest={() =>
            setLightboxIndex((lightboxIndex + 1) % gallryData.length)
          }
        />
      )}
    </div>
  );
};

export default Gallary;
