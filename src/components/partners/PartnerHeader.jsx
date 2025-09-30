import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/svg/footer-logo.svg";
import { LogOutIcon } from "../common/Icon";

const PartnerHeader = () => {
  const navigate = useNavigate();
const handleLogOut = () => {
  localStorage.removeItem("login");
  localStorage.removeItem("token"); 
  navigate("/login?role=student"); 
};

  return (
    <>
      <div className="flex flex-wrap justify-between bg-[#343434] px-5 xl:px-14 py-4">
        <div className="w-[120px] sm:w-[187px]">
          <Link to="/">
            <img className="w-full" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="xl:block hidden w-full xl:w-auto">
          <p className="font-medium text-xs text-white text-center">
            An ISO 9001 : 2015 Certified
          </p>
          <p className="font-medium text-xs text-white text-center">
            PRATIBHA IT EDUCATION work under PRATIBHA WELFARE TRUST Registered
            under Goverment of haryana in TRUST Act Registered no.9296
          </p>
          <p className="font-medium text-xs text-white text-center">
            PRATHIBA WELFARE TRUST Registered under Ministry of Micro, Small and
            Medium Enterprises Government of Bharat{" "}
          </p>
          <p className="font-medium text-xs text-[#BC0402] text-center">
            (MSME) Registration No. UDYAM-HR-06-0030353
          </p>
          <p className="font-medium text-xs text-white text-center">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, explicabo!
          </p>
        </div>
        <div
          onClick={handleLogOut}
          className="flex justify-end items-center gap-4 w-1/2 xl:w-auto cursor-pointer"
        >
          <div className="flex flex-col items-end justify-center">
            <h2 className="font-medium text-base text-white">sunil kumar</h2>
            <span className="font-medium text-base text-white">
              PITE922024001
            </span>
          </div>

          <LogOutIcon />
        </div>
        <div className="flex xl:hidden flex-col items-center w-full mt-3">
          <p className="font-medium text-xs text-white text-center">
            An ISO 9001 : 2015 Certified
          </p>
          <p className="font-medium text-xs text-white text-center">
            PRATIBHA IT EDUCATION work under PRATIBHA WELFARE TRUST Registered
            under Goverment of haryana in TRUST Act Registered no.9296
          </p>
          <p className="font-medium text-xs text-white text-center">
            PRATHIBA WELFARE TRUST Registered under Ministry of Micro, Small and
            Medium Enterprises Government of Bharat{" "}
          </p>
          <p className="font-medium text-xs text-[#BC0402] text-center">
            (MSME) Registration No. UDYAM-HR-06-0030353
          </p>
          <p className="font-medium text-xs text-white text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nesciunt.
          </p>
        </div>
      </div>
    </>
  );
};

export default PartnerHeader;
