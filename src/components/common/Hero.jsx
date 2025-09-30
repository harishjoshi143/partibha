import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Hero = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://pratibha-logo.onrender.com/api/hero";

  // Fetch hero images from API
  const fetchHeroImages = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status}`);
      }

      const data = await response.json();

      // Handle different possible response structures
      if (data && Array.isArray(data)) {
        setHeroImages(data);
      } else if (data.data && Array.isArray(data.data)) {
        setHeroImages(data.data);
      } else if (data.images && Array.isArray(data.images)) {
        setHeroImages(data.images);
      } else {
        console.log("API Response:", data);
        setHeroImages([]);
      }
    } catch (err) {
      console.error("Error fetching hero images:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroImages();
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Function to construct full image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "";

    // If it's already a full URL, return it
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // If it's a relative path, construct the full URL
    const baseUrl = "https://pratibhaallpic.onrender.com";
    return `${baseUrl}/${imagePath.replace(/\\/g, "/")}`;
  };

  // Loading state
  if (loading) {
    return (
      <div
        id="hero"
        className="hero_h h-96 bg-gray-200 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading hero images...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div
        id="hero"
        className="hero_h h-96 bg-gray-200 flex items-center justify-center"
      >
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading images: {error}</p>
          <button
            onClick={fetchHeroImages}
            className="font-bold text-base bg-red-600 leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // If no images are available
  if (!heroImages || heroImages.length === 0) {
    return (
      <div
        id="hero"
        className="hero_h h-96 bg-gray-200 flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="font-bold text-4xl text-black mb-4">
            Education is key to Success
          </h1>
          <Link
            to="/contact-us"
            className="font-bold text-base bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full"
          >
            Register Free
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div id="hero" className="hero_h">
      <Slider {...settings} className="h-full">
        {heroImages.map((data, index) => {
          // Get image URL based on API response structure
          const imageUrl = getImageUrl(data.image || data.url || data.imageUrl);

          return (
            <div key={index} className="relative h-full">
              <img
                className="h-full object-cover w-screen"
                src={imageUrl}
                alt={`hero-img-${index}`}
                onError={(e) => {
                  // Fallback if image fails to load
                  console.error(`Failed to load image: ${imageUrl}`);
                }}
              />

              <div className="absolute top-0 sm:left-[4%] w-full h-full flex flex-col gap-8 justify-center items-center px-4 md:w-3/5">
                <h1 className="font-bold text-4xl sm:text-5xl md:text-[52px] text-black md:leading-[62px] text-center">
                  Education is key to Success
                </h1>
                <span>
                  <Link
                    to="/contact-us"
                    className="font-bold text-base md:text-xl bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full"
                  >
                    Register Free{" "}
                  </Link>
                </span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Hero;
