import React, { createContext, useContext, useCallback, useState } from "react";

const HomeManageContext = createContext();     

export const useHomeContext = () => useContext(HomeManageContext);

const HomeContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [heroImg, setHeroImg] = useState([]);
  const [teamData, setTeamData] = useState([]);

  const HeroSliderData = useCallback(async () => {
    try {
      const path = `https://pratibhaallpic.onrender.com/api/header-hero`;
      const response = await fetch(path);
      const result = await response.json();
      setHeroImg(result);
    } catch (err) {
      console.error("Failed to fetch hero slider data", err);
      setError("Failed to load hero slider");
    }
  }, []);

  const ourTeamData = useCallback(async () => {
    try {
      const path = `https://pratibhaallpic.onrender.com/api/our-team`;
      const response = await fetch(path);
      const result = await response.json();
      setTeamData(result);
    } catch (err) {
      console.error("Failed to fetch team data", err);
      setError("Failed to load team data");
    }
  }, []);

  const value = {
    teamData,
    ourTeamData,
    HeroSliderData,
    heroImg,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <HomeManageContext.Provider value={value}>
      {children}
    </HomeManageContext.Provider>
  );
};

export default HomeContext;
