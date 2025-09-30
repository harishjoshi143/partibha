

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormDataContext } from "../../context/FormContext";
import Loader from "../Loader";

const UploadDetails = () => {
  const { UploadIdsInfo , loading } = useFormDataContext();
  const navigate = useNavigate();

  const [aadharFile, setAadharFile] = useState(null);
  const [residentFile, setResidentFile] = useState(null);
  const [casteFile, setCasteFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    if (type === "aadhar") setAadharFile(file);
    if (type === "resident") setResidentFile(file);
    if (type === "caste") setCasteFile(file);
  };

  const handlePreviousClick = (e) => {
    e.preventDefault();
    navigate("/application-form/qualifications");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const results = await Promise.all([
      aadharFile ? UploadIdsInfo(aadharFile) : true, // if optional
      residentFile ? UploadIdsInfo(residentFile) : true,
      casteFile ? UploadIdsInfo(casteFile) : true,
    ]);

    const allSuccessful = results.every(Boolean);

    if (allSuccessful) {
      navigate("/application-form/information-preview");
    } else {
      setError("One or more uploads failed. Please try again.");
    }
  };

  const renderUploadRow = (label, file, fileType) => (
    <div className="flex justify-between items-center border-t border-black">
      <h2 className="font-normal text-sm sm:text-xl xl:text-2xl ps-3 sm:ps-8 max-[450px]:max-w-[160px]">
        {label}
      </h2>
      <div className="flex items-center flex-col sm:flex-row gap-2 sm:border-l border-black sm:ps-5 p-3 w-1/2">
        <label
          className="font-bold text-sm sm:text-xl md:text-2xl bg-red leading-6 px-6 py-1.5 text-white inline-block capitalize rounded-full border cursor-pointer border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
        >
          upload
          <input
            type="file"
            hidden
            onChange={(e) => handleFileChange(e, fileType)}
          />
        </label>
        <span className="font-normal text-sm text-black text-center sm:text-start ">
          {file ? file.name : "No file uploaded"}
        </span>
      </div>
    </div>
  );

  return (

    <>
     {loading && <Loader />}
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-gray_light capitalize relative after:absolute after:w-[107px] after:h-0.5 after:bg-gray_light inline-block after:right-[56%] after:-bottom-4 before:absolute before:w-[107px] before:h-0.5 before:bg-gray_light before:left-[56%] before:-bottom-4">
          UPLOAD
          <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-5 "></span>
        </h2>
      </div>

      <p className="font-normal text-xs sm:text-base text-gray_light capitalize text-center mt-14">
        DETAILS OF PREVIOUS EXAMINATIONS PASSED FROM OTHER BOARD/UNIVERSITY
      </p>

      <div className="border border-[#121212] rounded-[40px] mt-2 overflow-hidden">
        {renderUploadRow("Aadhar Card", aadharFile, "aadhar")}
        {renderUploadRow("Resident Certificate", residentFile, "resident")}
        {renderUploadRow("Caste Certificate", casteFile, "caste")}
      </div>

      <div className="flex flex-col gap-2 mt-10 lg:mt-20 ">
        <input className="w-5" type="checkbox" name="checkbox" id="checkbox" required />
        <p className="font-normal text-xs sm:text-base text-gray_light capitalize">
          मैंने संस्थान के नियमों और विनियमों को पढ़ा और समझा है...
        </p>
        <p className="font-normal text-xs sm:text-base text-gray_light capitalize">
          I have read and understood the rules and regulations...
        </p>
      </div>

      {error && (
        <p className="text-red text-sm mt-4 text-right">{error}</p>
      )}

      <div className="flex justify-end gap-5 mt-10">
        <button
          onClick={handlePreviousClick}
          className="font-bold text-xl md:text-2xl bg-red leading-6 px-6 py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
        >
          Previous
        </button>
        <button
          type="submit"
          className="font-bold text-xl md:text-2xl bg-red leading-6 px-6 py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
        >
          Next
        </button>
      </div>
    </form></>
  );
};

export default UploadDetails;

