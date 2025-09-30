import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthSideBar = ({ setSwipeAuth, swipeAuth, hide }) => {
 const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname + location.search);

  const handleClick = () => {
    // Check if the pathname and query param match
    if (
      location.pathname === "/login" &&
      new URLSearchParams(location.search).get("role") === "partner"
    ) {
      // Redirect to partner-registration
      navigate("/partner-registeration");
    } else {
      // Normal toggle swipe
      setSwipeAuth(!swipeAuth);
    }
  };
  
  return (
    <>
      <div className="flex flex-col justify-between py-12 bg-gray_light px-5 w-full h-full">
        <h2 className="font-bold text-base md:text-xl text-white capitalize text-center">
          If you already has an account, just sign in.
        </h2>
        <button
            onClick={handleClick}
          className={`font-bold  text-base md:text-xl bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300 mt-3 lg:mt-5 ${hide}`}
        >
          {swipeAuth ? "Sign in" : "Sign up"}
        </button>
      </div>
    </>
  );
};

export default AuthSideBar;
