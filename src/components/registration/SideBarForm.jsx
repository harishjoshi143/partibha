import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/svg/footer-logo.svg";

const SideBarForm = () => {
  return (
    <div className="bg-gray_light rounded-[20px] p-8 flex justify-center h-full">
      <div className="w-[187px] h-[104px] relative after:absolute after:w-[55px] after:h-0.5 after:bg-white inline-block after:right-[60%] after:-bottom-0 before:absolute before:w-[55px] before:h-0.5 before:bg-white before:left-[60%] before:bottom-0 ">
        <Link
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
        <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-1 "></span>
      </div>
    </div>
  );
};

export default SideBarForm;
