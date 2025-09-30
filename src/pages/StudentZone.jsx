import React, { useEffect, useState } from "react";
import StudentsZone from "../components/student-zone/StudentsZone";
import OurTeam from "../components/landing-page/OurTeam";
import OurPartner from "../components/landing-page/OurPartner";
import { studentZoneData } from "../components/common/Helper";

const StudentZone = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const res = await fetch(
          "https://pratibhaallpic.onrender.com/api/header-logo"
        );
        const data = await res.json();

        setFormData({
          name: data?.name || "",
          description: data?.description || "",
          image: data?.image || "",
        });
      } catch (err) {
        console.error("Logo API Error:", err);
        setError("Failed to load About Us content.");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);
  useEffect(() => {
    console.log("formData updated:", formData);
  }, [formData]);
  console.log(formData);

  return (
    <>
      <StudentsZone mapData={studentZoneData} heading="Student Zone" />
      <OurTeam />
      <OurPartner />
    </>
  );
};

export default StudentZone;
