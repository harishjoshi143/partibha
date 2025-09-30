import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CustomDropdown from "../components/registration/CustomDropdown";
import { partnerResDetail, personalDetailsData } from "../components/common/Helper";

const PartnerRegistration = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    mobileNo: "",
    aadharNo: "",
    address: "",
    lastQualification: "", // used for last qualification dropdown
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropdownChange = (id, val) => {
    setFormData((prev) => ({
      ...prev,
      [id]: val,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    sessionStorage.setItem("step1", JSON.stringify(formData));
    navigate("center-details");
  };



  return (
      <>
          {location.pathname === "/partner-registeration" && <div className="custom_container mx-auto px-3 md:px-5">
              <form onSubmit={handleNext} className="py-14">
                  <div className="flex flex-wrap ">
                      {partnerResDetail.map((field) => (
                          <div key={field.id} className="w-full sm:w-1/2 px-2 mt-4">
                              <div className="flex flex-col gap-2">
                                  <label className="text-base lg:text-xl text-gray_light capitalize">
                                      {field.title} <span className="text-red">*</span>
                                  </label>

                                  {field.id === "gender" ? (
                                      <CustomDropdown
                                          options={["Male", "Female", "Other"]}
                                          value={formData.gender}
                                          onChange={(val) => handleDropdownChange("gender", val)}
                                      />
                                  ) : field.id === "lastQualification" ? (
                                      <CustomDropdown
                                          options={["10th", "12th", "Diploma", "Graduation", "Post-Graduation"]}
                                          value={formData.category}
                                          onChange={(val) => handleDropdownChange("category", val)}
                                      />
                                  ) : (
                                      <input
                                          required
                                          type={field.inputType}
                                          name={field.id}
                                          placeholder={field.placeholder}
                                          value={formData[field.id]}
                                          onChange={handleChange}
                                          className="border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
                                      />
                                  )}
                              </div>
                          </div>
                      ))}

                      {/* Permanent Address (not in map) */}
                      <div className="w-full px-2 mt-4">
                          <label className="text-base lg:text-xl text-gray_light capitalize">
                              Permanent Address <span className="text-red">*</span>
                          </label>
                          <input
                              required
                              type="text"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              placeholder="Enter address"
                              className="border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2 w-full"
                          />
                      </div>
                  </div>

                  <div className="flex justify-end mt-10">
                      <button
                          type="submit"
                          className={`font-bold text-xl md:text-2xl px-6 py-2 capitalize rounded-full duration-300 
            bg-red text-white hover:bg-transparent hover:text-red hover:border-red border border-transparent`}
                      >
                          Next
                      </button>
                  </div>
              </form>
          </div>}
          <Outlet/>
      </>
  );
};


export default PartnerRegistration
