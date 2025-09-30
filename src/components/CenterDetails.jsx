import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../components/registration/CustomDropdown";

const CenterDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    centerName: "",
    centerAddress: "",
    registrationNo: "",
    centerMainId: "",
    contactNo: "",
    panCard: "",
    registrationType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropdownChange = (val) => {
    setFormData((prev) => ({
      ...prev,
      registrationType: val,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();

    // Save second step data
    sessionStorage.setItem("step2", JSON.stringify(formData));

    // Navigate to final or next step
    navigate("/partner-registeration/requirements"); // Change route as per next step
  };

  return (
    <div className="custom_container mx-auto px-3 md:px-5">
      <form onSubmit={handleNext} className="py-14">
        <div className="flex flex-wrap">

          {[
            { id: "centerName", title: "Center Name", placeholder: "Enter center name" },
            { id: "centerAddress", title: "Center Address", placeholder: "Enter center address" },
            { id: "registrationNo", title: "Center Registration No.", placeholder: "Enter registration number" },
            { id: "centerMainId", title: "Center Email", placeholder: "Enter center Email" },
            { id: "contactNo", title: "Center Contact No.", placeholder: "Enter contact number" },
            { id: "panCard", title: "PAN Card No.", placeholder: "Enter PAN card number" },
          ].map((field) => (
            <div key={field.id} className="w-full sm:w-1/2 px-2 mt-4">
              <div className="flex flex-col gap-2">
                <label className="text-base lg:text-xl text-gray_light capitalize">
                  {field.title} <span className="text-red">*</span>
                </label>
                <input
                  required
                  type="text"
                  name={field.id}
                  placeholder={field.placeholder}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
                />
              </div>
            </div>
          ))}

          {/* Registration Type Dropdown */}
          <div className="w-full sm:w-1/2 px-2 mt-4">
            <div className="flex flex-col gap-2">
              <label className="text-base lg:text-xl text-gray_light capitalize">
                Registration Type <span className="text-red">*</span>
              </label>
              <CustomDropdown
                options={["Provisional", "Permanent", "Franchise"]}
                value={formData.registrationType}
                onChange={handleDropdownChange}
              />
            </div>
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
    </div>
  );
};

export default CenterDetails;
