


import React, { useEffect, useState } from "react";
import { personalDetailsData } from "../common/Helper";
import CustomDropdown from "./CustomDropdown";
import { UserIcon } from "../common/Icon";
import { useFormDataContext } from "../../context/FormContext";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../Loader";

const PersonalDetails = ({displayStyling}) => {
  const navigate = useNavigate()
  const location = useLocation();
const currentPath = location.pathname;
  const { StudentInfo, loading,  setError } = useFormDataContext();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    gender: "",
    mobileNo: "",
    aadharNo: "",
    email: "",
    category: "",
    nationality: "",
    occupation: "",
  });

  const [imagePreview, setImagePreview] = useState({});
  const [selectedImages, setSelectedImages] = useState({});
  const [debarredStatus, setDebarredStatus] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleGenderChange = (option) => {
    setFormData((prev) => ({ ...prev, gender: option }));
  };

  const handleCategoryChange = (option) => {
    setFormData((prev) => ({ ...prev, category: option }));
  };

  const handleDebarredChange = (value) => {
    setDebarredStatus(value);
  };

  const handleImageChange = (event, inputKey) => {
    const file = event.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview((prev) => ({
        ...prev,
        [inputKey]: previewURL,
      }));
      setSelectedImages((prev) => ({
        ...prev,
        [inputKey]: file,
      }));
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");


    
    const data = new FormData();

    // Append text fields
  data.append("firstName", formData.firstName || "");
  data.append("lastName", formData.lastName || "");
  data.append("fatherName", formData.fatherName || "");
  data.append("motherName", formData.motherName || "");
  data.append("gender", formData.gender || "");
  data.append("mobileNo", formData.mobileNo || "");
  data.append("aadharNo", formData.aadharNo || "");
  data.append("emailId", formData.email || "");
  data.append("category", formData.category || "");
  data.append("nationality", formData.nationality || "");
  data.append("fatherOrHusbandOccupation", formData.occupation || "");
  data.append("debarred", debarredStatus); 
   const dob = new Date(formData.dateOfBirth);
  data.append("dateOfBirth", isNaN(dob.getTime()) ? "" : dob.toISOString());

    if (selectedImages.photo) data.append("images", selectedImages.photo);
    if (selectedImages.sign1) data.append("images", selectedImages.sign1);
    if (selectedImages.sign2) data.append("images", selectedImages.sign2);


  const result = await StudentInfo(data);
if (result) {
  navigate("/application-form/address"); // ✅ Will redirect now
} else {
  setError("Submission failed.");
}

  };

  useEffect(() => {
    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
    const areImagesUploaded = ["photo", "sign1", "sign2"].every((key) => imagePreview[key]);
    setIsFormComplete(isFormValid && debarredStatus !== "" && areImagesUploaded);
  }, [formData, debarredStatus, imagePreview]);


  let imageKeysToShow = ["photo", "sign1", "sign2"];
if (currentPath === "/careers/details") {
  imageKeysToShow = ["photo", "sign1"];
}

  return (
    <>
       {loading && <Loader />}
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-gray_light capitalize relative after:absolute after:w-[107px] after:h-0.5 after:bg-gray_light inline-block after:right-[56%] after:-bottom-4 before:absolute before:w-[107px] before:h-0.5 before:bg-gray_light before:left-[56%] before:-bottom-4">
          PERSONAL DETAILS
          <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-5"></span>
        </h2>
      </div>

      <div className="mt-12 lg:mt-16">
        <p className="text-base text-gray_light">
          सभी प्रविष्टियाँ अभ्यर्थी को स्वयं बड़े अक्षरों में भरनी होंगी... आवेदन पत्र दो पृष्ठों नामांकन संख्या
        </p>
        <p className="text-base text-gray_light">
          All entries must be filled by the candidate himself/herself...
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {personalDetailsData.map((data, index) => (
            <div key={index} className="w-full sm:w-1/2 px-2">
              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor={data.name} className="text-base lg:text-xl text-gray_light capitalize">
                  {data.title} <span className="text-red font-bold">*</span>
                </label>
                {data.id === "gender" ? (
                  <CustomDropdown
                    options={["Male", "Female", "Other"]}
                    value={formData.gender}
                    onChange={handleGenderChange}
                  />
                ) : data.id === "category" ? (
                  <CustomDropdown
                    options={["General", "OBC", "SC", "ST"]}
                    value={formData.category}
                    onChange={handleCategoryChange}
                  />
                ) : (
                  <input
                    type={data.inputType}
                    required
                    id={data.id}
                    name={data.id}
                    placeholder={data.placeholder}
                    value={formData[data.id]} 
                    onChange={handleInputChange}
                    className="border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
                  />
                )}
              </div>
            </div>
          ))}

          <div className={`flex justify-between gap-2 w-full mt-12 ${displayStyling}`}>
            <p className="text-base lg:text-xl text-black">
              Have You Ever Been Debarred By Any University / Board
            </p>
            <div className="flex items-center gap-1">
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="yes"
                name="debarred"
                value="yes"
                checked={debarredStatus === "yes"}
                onChange={() => handleDebarredChange("yes")}
              />
            </div>
            <div className="flex items-center gap-1">
              <label htmlFor="no">No</label>
              <input
                type="radio"
                id="no"
                name="debarred"
                value="no"
                checked={debarredStatus === "no"}
                onChange={() => handleDebarredChange("no")}
              />
            </div>
          </div>

          {/* Image Uploads */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center  w-full ${currentPath ? "justify-start gap-5":"justify-between gap-6 sm:gap-0 "}`}>
            {imageKeysToShow.map((key, i) => (
              <div key={key} className="flex flex-col items-center">
                <div className={`flex justify-center items-center  border-2 rounded-xl border-black overflow-hidden ${i===0 ? "w-[200px] h-[240px]":"w-[250px] h-[150px]"}`}>
                  {imagePreview[key] ? (
                    <img src={imagePreview[key]} alt="Preview" className="w-full h-full object-fit" />
                  ) : (
                    <UserIcon />
                  )}
                </div>
                <h2 className="text-lg lg:text-2xl text-center mt-1 capitalize">
                  <label htmlFor={`upload-${key}`} className="cursor-pointer text-center">
                    upload {key === "photo" ? "photo" : "signature"}
                    <input
                      type="file"
                      id={`upload-${key}`}
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageChange(e, key)}
                    />
                  </label>
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-10">
          <button
            type="submit"
            // disabled={!isFormComplete || loading}
            className={`font-bold text-xl md:text-2xl px-6 py-2 capitalize rounded-full duration-300 
           bg-red text-white hover:bg-transparent hover:text-red hover:border-red border border-transparent
            `}
          >
            {loading ? "Submitting..." : "Next"}
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
