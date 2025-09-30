import React from "react";
import DirectorMessage from "../components/about-us/DirectorMessage";
import AboutUs from "../components/about-us/AboutUs";
import OurMission from "../components/about-us/OurMission";
import OurVision from "../components/about-us/OurVision";
import OurTeam from "./../components/landing-page/OurTeam";
import OurPartner from "./../components/landing-page/OurPartner";

const About = () => {
  return (
    <>
      <DirectorMessage />
      <AboutUs />
      <OurMission />
      <OurVision />
      <OurTeam />
      <OurPartner />
    </>
  );
};

export default About;
