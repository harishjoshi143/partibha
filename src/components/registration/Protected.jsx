import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Componants, componentProps, heading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
      console.log("helo");
    }
  });

  return (
    <div>
      <Componants {...componentProps} heading={heading} />
    </div>
  );
};

export default Protected;
