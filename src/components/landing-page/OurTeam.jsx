/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHomeContext } from "../../context/HomeContext";

const teamMembers = [
  {
    name: "Sunil Kumar",
    role: "Director",
    img: "https://res.cloudinary.com/dbcy7inz3/image/upload/v1759133093/partners/ybcsxnwfzzzwxkemm7uw.jpg",
    desc: "Leading with passion and purpose, Sunil Kumar inspires both students and staff to push boundaries and excel in technology and education.",
    socials: [FaFacebookF, FaTwitter, FaInstagram],
  },
  {
    name: "Anil",
    role: "Manager",
    img: "https://res.cloudinary.com/dbcy7inz3/image/upload/v1759133150/partners/aa4xjilxw3exglbpcqhs.jpg",
    desc: "Dedicated to teamwork and excellence, Anil brings structure, coordination, and leadership to keep Pratibha IT Education moving forward.",
    socials: [FaFacebookF, FaTwitter, FaInstagram],
  },
  {
    name: "Naveen Sharma",
    role: "Teacher",
    img: "https://res.cloudinary.com/dbcy7inz3/image/upload/v1759133170/partners/njbs3zyzju8d0x5na8r4.jpg",
    desc: "Dedicated to shaping young minds, Naveen Sharma combines knowledge, experience, and passion to make economics both understandable and exciting.",
    socials: [FaFacebookF, FaTwitter, FaInstagram],
  },
  {
    name: "Kavita",
    role: "Team Member",
    img: "https://res.cloudinary.com/dbcy7inz3/image/upload/v1759133181/partners/xk6hnfdih6jrerankpfi.jpg",
    desc: "A committed and enthusiastic member of our team, Kavita brings energy, skills, and dedication to every project.",
    socials: [FaFacebookF, FaTwitter, FaInstagram],
  },
];

export default function OurTeam() {
  const { ourTeamData, teamData } = useHomeContext();

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setActiveSlide(0); // ✅ Ensures first slide is active on mount
  }, []);

  useEffect(() => {
    ourTeamData();
  });

  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
    responsive: [
      {
        breakpoint: 640, // tablets and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-[#ccc]/60 py-16 px-4">
      <div className="custom_container mx-auto px-3 md:px-5 text-center">
        <h2 className="text-2xl md:text-[32px] font-bold text-red mb-12">
          Meet our team
        </h2>

        <Slider {...settings}>
          {teamMembers.map((member, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div key={idx} className="px-6">
                <div
                  className={`rounded-3xl p-5 md:p-7 transition-all duration-300 shadow-lg ${
                    isActive
                      ? "bg-white text-gray-700"
                      : "bg-transparent text-white"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-6 py-5">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="max-w-44 max-h-44 object-cover rounded-full"
                    />
                    <div className="text-center lg:text-left flex flex-col gap-3">
                      <p className="text-sm text-black">{member.role}</p>
                      <h3 className="text-xl font-semibold text-red">
                        {member.name}
                      </h3>
                      <p className="text-sm mt-2 text-black">{member.desc}</p>
                      <div className="flex justify-center lg:justify-start gap-4 mt-4">
                        {member.socials.map((Icon, i) => (
                          <a
                            key={i}
                            href="#"
                            className={`text-xl transition hover:scale-110 ${
                              isActive ? "text-red" : "text-red"
                            }`}
                          >
                            <Icon />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
