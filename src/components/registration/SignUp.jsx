

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; 
import Loader from "../Loader";

const SignUp = () => {
  const { loading, error, signup } = useAuth();
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [newUserData, setNewUserData] = useState({
    fname: "",
    dob: "",
    mob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setNewUserData({ ...newUserData, [event.target.name]: event.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newUserData.password !== newUserData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setPasswordError("");

    const payload = {
      firstName: newUserData.fname,
      dob: newUserData.dob,
      email: newUserData.email,
      phoneNumber: newUserData.mob,
      password: newUserData.password,
      confirmPassword: newUserData.confirmPassword,
    };

    const success = await signup(payload);

    if (success) {
      setNewUserData({
        fname: "",
        dob: "",
        mob: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/application-form");
    }
  };


  return (

    <>
      {loading && <Loader />}
    <div className="py-8 lg:py-10 px-5 lg:px-10 w-full h-full">
      <div className="flex flex-col h-full lg:justify-center">
        <h2 className="font-bold text-2xl xl:text-[32px] text-gray_light capitalize text-center mb-6 ">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="fname" className="font-normal text-base lg:text-lg text-black capitalize">
              Full Name
            </label>
            <input
              className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
              type="text"
              required
              id="fname"
              name="fname"
              value={newUserData.fname}
              onChange={handleChange}
              placeholder="first name"
            />
          </div>

          <div className="flex flex-wrap w-full">
            <div className="flex flex-col gap-1 w-full sm:w-1/2 sm:pe-1">
              <label htmlFor="dob" className="font-normal text-base lg:text-lg text-black capitalize">
                Date of Birth
              </label>
              <input
                className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
                type="number"
                required
                id="dob"
                name="dob"
                value={newUserData.dob}
                onChange={handleChange}
                onWheel={(e) => e.preventDefault()}
                placeholder="date of birth"
                onFocus={(e) => {
                  e.target.type = "date";
                }}
              />
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-1/2 sm:ps-1">
              <label htmlFor="mob" className="font-normal text-base lg:text-lg text-black capitalize">
                Mobile
              </label>
              <input
                className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
                type="tel"
                required
                id="mob"
                name="mob"
                value={newUserData.mob}
                onChange={handleChange}
                placeholder="phone number"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-normal text-base lg:text-lg text-black capitalize">
              Email
            </label>
            <input
              className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
              type="email"
              required
              id="email"
              name="email"
              value={newUserData.email}
              onChange={handleChange}
              placeholder="email"
            />
          </div>

          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex flex-col sm:w-1/2 sm:pe-1">
              <label htmlFor="password" className="font-normal text-base lg:text-lg text-black capitalize">
                Password
              </label>
              <input
                className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
                type="password"
                required
                id="password"
                name="password"
                value={newUserData.password}
                onChange={handleChange}
                placeholder="password"
              />
            </div>
            <div className="flex flex-col sm:w-1/2 sm:ps-1">
              <label htmlFor="confirmPassword" className="font-normal text-base lg:text-lg text-black capitalize whitespace-nowrap">
                Confirm Password
              </label>
              <input
                className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
                type="password"
                required
                id="confirmPassword"
                name="confirmPassword"
                value={newUserData.confirmPassword}
                onChange={handleChange}
                placeholder="confirm password"
              />
            </div>
          </div>

          {passwordError && (
            <span className="text-red font-normal text-base">{passwordError}</span>
          )}
          {error && (
            <span className="text-red font-normal text-base">{error}</span>
          )}

          <span>
            <button
              type="submit"
              disabled={loading}
              className="font-bold text-base md:text-xl bg-red leading-6 px-6 py-1 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
            >
              {loading ? "Signing Up..." : "Sign up"}
            </button>
          </span>
        </form>
      </div>
    </div></>
  );
};

export default SignUp;
