import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const OurPartner = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch API data
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch(
          "https://pratibha-logo.onrender.com/api/partners"
        );
        const data = await response.json();
        setPartners(data); // assuming API returns an array
      } catch (error) {
        console.error("Error fetching partners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div id="team" className="pt-14 xl:pt-20 pb-24">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize relative ">
            Our partner
          </h2>
          <p className="font-normal text-lg mt-8 text-center">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. Video provides a powerful way to help you prove
            your point.
          </p>

          {/* Show loading while fetching */}
          {loading ? (
            <p className="mt-8 text-gray-500">Loading partners...</p>
          ) : (
            <div className="w-full mt-8 lg:mt-[87px]">
              <Marquee gradient={false} speed={50} pauseOnHover={true}>
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 group mx-6"
                  >
                    <div className="overflow-hidden rounded-full duration-300 group-hover:shadow-backdrop">
                      <img
                        className="rounded-full w-36 h-36 object-fit duration-300 group-hover:scale-110"
                        src={partner.image} // adjust based on API field name
                        alt={"partner-img"}
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPartner;
