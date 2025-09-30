import React, { useState } from "react";
import AuthSideBar from "./AuthSideBar";
import Login from "./Login";
import SignUp from "./SignUp";
import { useLocation } from "react-router-dom";

const Auth = () => {
  const location = useLocation();
  const [swipeAuth, setSwipeAuth] = useState(false);

  const isStudentLogin =
    location.pathname === "/login" && location.search === "?role=student";
  return (
    <div id="login" className="py-12 lg:py-24 ">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex justify-center">
          <div className="w-full md:w-10/12 lg:w-8/12 shadow-backdrop rounded-[30px]">
            <div
              className={`flex flex-wrap justify-between rounded-[30px] overflow-hidden relative`}
            >
              <div
                className={`w-full duration-1000  ${
                  !swipeAuth
                    ? "lg:w-[66%] w-full h-[472px]"
                    : "lg:w-[28%] w-full h-[672px] sm:h-[500px]"
                }`}
              >
                <div
                  className={`duration-1000 h-full absolute w-full lg:w-[70%] bg-white  px-3 sm:px-6 lg:px-0 ${
                    swipeAuth
                      ? "left-0 lg:left-[28%] block lg:z-10"
                      : "left-0 lg:z-0"
                  } ${!isStudentLogin ? "w-0" : "!hidden"}`}
                >
                  <SignUp swipeAuth={swipeAuth} setSwipeAuth={setSwipeAuth} />
                </div>
                <div
                  className={`duration-1000 absolute  bg-white  px-3 sm:px-6 lg:px-0 ${
                    swipeAuth
                      ? "max-lg:-right-full right-0"
                      : "block right-0 h-full lg:right-[28%]"
                  } ${
                    !isStudentLogin
                      ? "w-full lg:w-[72%]"
                      : "w-full  lg:!right-0"
                  }`}
                >
                  <Login swipeAuth={swipeAuth} setSwipeAuth={setSwipeAuth} />
                </div>
              </div>
              <div className=" justify-center lg:justify-end w-full hidden pb-10 -mt-10 min_500:pe-6 z-20">
                <button
                  className="font-bold text-base md:text-xl bg-red leading-6 px-3 sm:px-6 py-3 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-500"
                  onClick={() => setSwipeAuth(!swipeAuth)}
                >
                  {swipeAuth
                    ? "Sign in if already have an account"
                    : "Sign up if yor are new there"}
                </button>
              </div>
              {!isStudentLogin && (
                <div
                  className={`w-full lg:w-[28%] absolute h-full hidden lg:block duration-1000 z-10 ${
                    swipeAuth
                      ? "left-0 w-full lg:w-[28%]"
                      : "left-[72%] w-full lg:w-[28%]"
                  }`}
                >
                  <AuthSideBar
                    swipeAuth={swipeAuth}
                    setSwipeAuth={setSwipeAuth}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
