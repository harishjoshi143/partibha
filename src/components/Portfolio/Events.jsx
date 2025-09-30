import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Img1 from "../../assets/images/png/img1.jpg"; // demo images
import Img2 from "../../assets/images/png/img2.jpg";
import Img3 from "../../assets/images/png/img3.jpg";
import Img4 from "../../assets/images/png/img5.jpg";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        if (data && data.length > 0) {
          setEvents(data);
        } else {
          setDemoEvents();
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setDemoEvents();
      }
    };
    fetchEvents();
  }, []);

  // function to set demo fallback events
  const setDemoEvents = () => {
    setEvents([
      {
        _id: "demo1",
        name: "New Year Celebration",
        date: "01 Jan 2024",
        image: Img1,
        isLocal: true,
      },
      {
        _id: "demo2",
        name: "Certificate Distribution",
        date: "05 Jan 2025",
        image: Img2,
        isLocal: true,
      },
      {
        _id: "demo3",
        name: "Certificate Distribution",
        date: "10 Jan 2025",
        image: Img3,
        isLocal: true,
      },
      {
        _id: "demo4",
        name: "Certificate Distribution",
        date: "15 Jan 2025",
        image: Img4,
        isLocal: true,
      },
    ]);
  };

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div id="events" className="pt-14 pb-24 bg-[#ccc]/60">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-red capitalize">
            events
          </h2>
          <p className="font-normal text-lg mt-8 text-center">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add.
          </p>

          <div className="w-full mt-12">
            <Slider {...settings}>
              {events.map((event, index) => (
                <div
                  key={event._id || index}
                  className="w-full sm:w-1/2 xl:w-1/3 px-2 mt-4"
                >
                  <div className="flex flex-col justify-center items-center p-4 duration-300 hover:border-transparent group">
                    <div className="relative">
                      <div className="overflow-hidden duration-300">
                        <img
                          className="w-[300px] group-hover:scale-110 h-[200px] duration-300"
                          src={
                            event.isLocal
                              ? event.image
                              : `https://pratibhaallpic.onrender.com/${event.image}`
                          }
                          alt={event.name}
                        />
                      </div>
                    </div>
                    <p className="text-xs text-normal text-end w-full text-red mt-1 uppercase">
                      {event.date}
                    </p>
                    <h3 className="font-extrabold text-xl text-start w-full text-gray_light mt-1 capitalize">
                      {event.name}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
