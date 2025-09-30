import React, { useEffect, useState } from "react";
import aboutImg from "../../assets/images/webp/about-img.webp";

const AboutUs = () => {
  // ✅ Demo fallback data
  const demoData = {
    name: "Pratibha IT Education",
    description:
      "At Pratibha IT Education, we believe in empowering students with practical knowledge and real-world IT skills. Our mission is to create an environment where innovation, learning, and growth go hand in hand.",
    image: aboutImg,
  };

  const [formData, setFormData] = useState(demoData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          "https://pratibhaallpic.onrender.com/api/about"
        );
        const data = await res.json();

        if (data && (data.name || data.description || data.image)) {
          setFormData({
            name: data?.name || demoData.name,
            description: data?.description || demoData.description,
            image: data?.image
              ? `https://pratibhaallpic.onrender.com/${data.image.replace(
                  /\\/g,
                  "/"
                )}`
              : demoData.image,
          });
        } else {
          // ✅ Use demo data if API returns empty
          setFormData(demoData);
        }
      } catch (err) {
        console.error("About API Error:", err);
        setFormData(demoData); // ✅ Use demo data on error
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="pt-12 lg:mt-20 pb-12 md:pb-16 ">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-[#E70000] capitalize">
            About Us
          </h2>

          {loading ? (
            <p className="mt-10 text-gray-500 text-center">Loading...</p>
          ) : (
            <div className="flex flex-col-reverse lg:flex-row mt-12 md:mt-16 lg:mt-20">
              {/* Left Content */}
              <div className="lg:w-8/12 md:px-9 w-full mt-8 lg:mt-0">
                <div className="flex flex-col justify-center h-full">
                  <h2 className="font-bold text-black text-3xl md:text-4xl lg:text-[51px] lg:leading-[61px]">
                    {formData.name}
                  </h2>
                  <p className="font-normal text-base lg:text-lg text-gray-600 text-justify mt-3 sm:mt-6 lg:mt-12">
                    {formData.description}
                  </p>
                  <span className="mt-12">
                    <button className="font-bold text-base md:text-xl bg-red px-6 py-2.5 text-white rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300">
                      Learn More
                    </button>
                  </span>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full sm:w-8/12 mx-auto lg:w-4/12 md:px-4">
                <div className="flex flex-col justify-center h-full">
                  <img
                    src={formData.image || aboutImg}
                    alt={formData.name || "About Us"}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
