import React, { useState } from "react";
import { addressDetailsData } from "../common/Helper";
import { Link, useNavigate } from "react-router-dom";
import { useFormDataContext } from "../../context/FormContext";
import Loader from "../Loader";

const Address = () => {
    const { addressInfo, loading,  setError } = useFormDataContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    permanentAddress: { address: "", city: "", state: "", zip: "" },
    mailingAddress: { address: "", city: "", state: "", zip: "" },
  });
  const [sameAddress, setSameAddress] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [dataset.type]: {
        ...prevFormData[dataset.type],
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setSameAddress(checked);
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        mailingAddress: { ...prevFormData.permanentAddress },
      }));
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    permanentAddress: {
      address: formData.permanentAddress.address,
      state: formData.permanentAddress.state,
      city: formData.permanentAddress.city,
      pinCode: formData.permanentAddress.zip,
    },
    mailingAddress: {
      address: formData.mailingAddress.address,
      state: formData.mailingAddress.state,
      city: formData.mailingAddress.city,
      pinCode: formData.mailingAddress.zip,
    },
  };

  try {
    await addressInfo(payload);
    navigate("/application-form/qualifications");
  } catch (err) {
    setError("Failed to submit address.");
  }
};




  const handlePreviousClick = (e) => {
    e.preventDefault();

    navigate("/application-form/");
  };

  return (
    <>
      {/* {loading && */}
        <Loader />
      {/* } */}
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-gray_light capitalize relative after:absolute after:w-[107px] after:h-0.5 after:bg-gray_light inline-block after:right-[56%] after:-bottom-4 before:absolute before:w-[107px] before:h-0.5 before:bg-gray_light before:left-[56%] before:-bottom-4">
          ADDRESS
          <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-5 "></span>
        </h2>
      </div>{" "}
      <form onSubmit={handleSubmit}>
        {addressDetailsData.map((items, index) => (
          <div key={index} className="flex flex-wrap mt-10">
            {items.inputFields.map((data, idx) => (
              <div key={idx} className={` ${data.styling}`}>
                <div className="flex flex-col gap-1 mt-2">
                  <label
                    htmlFor={data.id}
                    className="font-normal text-base lg:text-xl text-gray_light capitalize "
                  >
                    {data.title}
                    <span className="text-red font-bold">*</span>
                  </label>
                  <input
                    type={data.inputType}
                    required
                    id={data.id}
                    name={data.id}
                    data-type={
                      index === 0 ? "permanentAddress" : "mailingAddress"
                    }
                    value={
                      formData[
                        index === 0 ? "permanentAddress" : "mailingAddress"
                      ][data.id]
                    }
                    onChange={handleInputChange}
                    placeholder={data.placeholder}
                    className="border border-black placeholder:capitalize outline-none rounded-lg text-base font-normal text-black shadow-input_shadow py-1.5 px-2"
                    disabled={index === 1 && sameAddress} // Disable mailing address fields if checkbox is checked
                  />
                </div>
              </div>
            ))}
            {index === 0 && (
              <div className="flex gap-2 mt-10">
                <input
                  className="w-5"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  checked={sameAddress}
                  onChange={handleCheckboxChange}
                />
                <p className="font-normal text-lg lg:text-2xl text-black">
                  {items.address}
                </p>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-end gap-6 mt-10">
          <button
            type="button"
            onClick={handlePreviousClick}
            className="font-bold text-xl md:text-2xl bg-red leading-6 px-6 py-2 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
          >
            Previous
          </button>
          <button
            type="submit"
            className="font-bold  text-base md:text-xl bg-red leading-6 px-6 py-2 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Address;
