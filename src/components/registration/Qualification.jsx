


import React, { useRef, useState } from "react";
import { qualificationDetailsData } from "../common/Helper";
import { useNavigate } from "react-router-dom";
import { ViewIcon } from "../common/Icon";
import { useFormDataContext } from "../../context/FormContext";
import Loader from "../Loader";


const Qualification = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { QualificationInfo, loading } = useFormDataContext();

  const [addedQualifications, setAddedQualifications] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState(null); // NEW

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setFilePreviewUrl(previewUrl);
    }
  };

  const [formData, setFormData] = useState({
    examName: "",
    roll: "",
    board: "",
    passingYear: "",
    marksObtains: "",
    totalMarks: "",
    percentage: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddQualification = (e) => {
    e.preventDefault();
    const {
      examName,
      roll,
      board,
      passingYear,
      marksObtains,
      totalMarks,
      percentage,
    } = formData;

    if (
      !examName ||
      !roll ||
      !board ||
      !passingYear ||
      !marksObtains ||
      !totalMarks ||
      !percentage
    ) {
      alert("Please fill all fields before adding a qualification.");
      return;
    }

    setAddedQualifications((prev) => [...prev, formData]);
    setFormData({
      examName: "",
      roll: "",
      board: "",
      passingYear: "",
      marksObtains: "",
      totalMarks: "",
      percentage: "",
    });
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    if (addedQualifications.length === 0) {
      alert("Please add at least one qualification before proceeding.");
      return;
    }

    const success = await QualificationInfo(addedQualifications, selectedFile);

    if (success) {
      navigate("/application-form/upload-documents");
    } else {
      console.log("Failed to submit qualifications. Please try again.");
    }
  };


  const handlePreviousClick = () => {
    navigate("/application-form/uploads");
  };



  return (
    <>
      {loading && <Loader />}

      <>

        <div className="flex justify-center">
          <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-gray_light capitalize relative after:absolute after:w-[107px] after:h-0.5 after:bg-gray_light inline-block after:right-[56%] after:-bottom-4 before:absolute before:w-[107px] before:h-0.5 before:bg-gray_light before:left-[56%] before:-bottom-4">
            QUALIFICATION
            <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-5 "></span>
          </h2>
        </div>

        <form onSubmit={handleAddQualification}>
          <div className="flex items-center flex-wrap mt-10">
            {qualificationDetailsData.map((data, index) => (
              <div key={index} className={` ${data.styling}`}>
                <div className="flex flex-col gap-1 mt-2">
                  <label
                    htmlFor={data.id}
                    className="font-normal text-base lg:text-xl text-gray_light capitalize "
                  >
                    {data.title}
                    <span className="text-red font-bold">*</span>
                  </label>

                  {data.inputType === "dropdown" ? (
                    <select
                      required
                      id={data.id}
                      name={data.id}
                      value={formData[data.id]}
                      onChange={handleInputChange}
                      className={`border border-black outline-none rounded-lg text-base font-normal shadow-input_shadow py-1.5 px-2 ${formData[data.id] === "" ? "text-gray" : "text-black"
                        }`}
                    >
                      <option value="" disabled>
                        {data.placeholder}
                      </option>
                      {data.options.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={data.inputType}
                      id={data.id}
                      name={data.id}
                      value={formData[data.id]}
                      onChange={handleInputChange}
                      placeholder={data.placeholder}
                      className="border border-black placeholder:capitalize outline-none rounded-lg text-base font-normal text-black shadow-input_shadow py-1.5 px-2"
                    />
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-row items-center justify-between gap-2 w-full sm:w-2/3 mt-10 ps-4">
              <label
                onClick={handleUploadClick}
                className="font-bold text-base sm:text-xl md:text-2xl bg-red leading-6 px-6 py-1.5 text-white rounded-full cursor-pointer hover:border-red hover:text-red hover:bg-transparent duration-300"
              >
                Upload
              </label>
              <input ref={fileInputRef} hidden type="file" onChange={handleFileChange} />

              {filePreviewUrl && (
                <a
                  href={filePreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm sm:text-base ml-2"
                >   <div className="flex items-center gap-2">
                    <label className="font-normal text-base sm:text-xl text-black text-center sm:text-start">
                      View Uploaded Document
                    </label>
                    <ViewIcon />

                  </div>
                </a>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-2 sm:gap-6 mt-10">
            <button
              onClick={handleAddQualification}
              type="submit"
              className="font-bold text-base md:text-xl bg-red px-6 py-1.5 text-white rounded-full hover:border-red hover:text-red hover:bg-transparent duration-300"
            >
              Add
            </button>
            <div className="flex gap-2 sm:gap-5">
              <button
                onClick={handlePreviousClick}
                type="button"
                className="font-bold text-base md:text-xl bg-red px-6 py-1.5 text-white rounded-full hover:border-red hover:text-red hover:bg-transparent duration-300"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="font-bold text-base md:text-xl bg-red px-6 py-1.5 text-white rounded-full hover:border-red hover:text-red hover:bg-transparent duration-300"
              >
                Next
              </button>
            </div>
          </div>
        </form>

        <div className="mt-10 flex flex-wrap justify-between">
          {addedQualifications.map((qualification, index) => (
            <div key={index} className="overflow-x-auto mt-6">
              <table className="min-w-full border-collapse w-[1000px]">
                <thead>
                  <tr className="bg-[#A9D18E]">
                    <th className="border border-black px-4 py-2">Exam Name</th>
                    <th className="border border-black px-4 py-2">Roll No</th>
                    <th className="border border-black px-4 py-2">Board</th>
                    <th className="border border-black px-4 py-2">Passing Year</th>
                    <th className="border border-black px-4 py-2">Marks Obtained</th>
                    <th className="border border-black px-4 py-2">Total Marks</th>
                    <th className="border border-black px-4 py-2">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-white odd:bg-gray-100">
                    <td className="border border-gray-300 px-4 py-2">
                      {qualification.examName}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {qualification.roll}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {qualification.board}
                    </td>
                    <td className="border border-gray-300 px-4 py-2"> 
                      {qualification.passingYear}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {qualification.marksObtains}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {qualification.totalMarks}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {qualification.percentage}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Qualification;
