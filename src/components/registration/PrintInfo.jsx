import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/svg/logo.svg";
import Print from "./Print";
import ReactToPrint from "react-to-print";

const PrintInfo = ({ handleNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    gender: "",
    aadharNo: "",
    category: "",
    debarred: "",
    emailId: "",
    fatherName: "",
    fatherOrHusbandOccupation: "",
    lastName: "",
    mobileNo: "",
    motherName: "",
    nationality: "",
    images: "",
    address: "",
    city: "",
    pinCode: "",
    marksObtained: "",
    nameOfExam: "",
    boardUniversity: "",
    percentage: "",
    passingYear: "",
    percentage: "",
    rollNo: "",
    totalMarks: "",
  });
  const location = useLocation();
  const printRef = useRef();
  const [, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // Create a temporary URL for the selected image
    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
  };
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  useEffect(() => {
    const getStudentData = async () => {
      try {
        const res = await fetch(
          "https://persnal-details.onrender.com/api/students"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data[0], // safely merge student data
        }));
      } catch (error) {
        console.log("Student API error:", error);
      }
    };
    getStudentData();
  }, []);

  useEffect(() => {
    const getAddressData = async () => {
      try {
        const res = await fetch(
          "https://address-api-z6zt.onrender.com/api/addresses"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data[0]?.permanentAddress, // safely merge permanent address
        }));
      } catch (error) {
        console.log("Address API error:", error);
      }
    };
    getAddressData();
  }, []);

  useEffect(() => {
    const getQualificationData = async () => {
      try {
        const res = await fetch(
          "https://qualification-api-2.onrender.com/api/qualifications"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data[1], // safely merge qualification data (index 1)
        }));
      } catch (error) {
        console.log("Qualification API error:", error);
      }
    };
    getQualificationData();
  }, []);

  useEffect(() => {
    const getStudentData = async () => {
      try {
        const res = await fetch(
          "https://persnal-details.onrender.com/api/students"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data, // safely merge student data
        }));
      } catch (error) {
        console.log("Student API error:", error);
      }
    };
    getStudentData();
  }, []);

  useEffect(() => {
    const getAddressData = async () => {
      try {
        const res = await fetch(
          "https://address-api-z6zt.onrender.com/api/addresses"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data[0]?.permanentAddress, // safely merge permanent address
        }));
      } catch (error) {
        console.log("Address API error:", error);
      }
    };
    getAddressData();
  }, []);

  useEffect(() => {
    const getQualificationData = async () => {
      try {
        const res = await fetch(
          "https://qualification-api-2.onrender.com/api/qualifications"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data[1], // safely merge qualification data (index 1)
        }));
      } catch (error) {
        console.log("Qualification API error:", error);
      }
    };
    getQualificationData();
  }, []);

  return (
    <div>
      <div className="flex justify-center lg:items-center">
        <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-gray_light capitalize relative after:absolute after:w-[107px] after:h-0.5 after:bg-gray_light inline-block after:right-[56%] after:-bottom-4 before:absolute before:w-[107px] before:h-0.5 before:bg-gray_light before:left-[56%] before:-bottom-4">
          PRINT
          <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-5 "></span>
        </h2>
      </div>
      <div className="!overflow-x-scroll mt-20">
        <div className="w-[1400px] lg:w-full" ref={printRef}>
          <div className=" p-1 w-full">
            <div className="">
              <div className="flex justify-between items-center px-12">
                <div className="mt-2 flex">
                  <div className="flex gap-2 flex-col">
                    <div className="flex gap-2 items-center">
                      <div className="">
                        <label
                          htmlFor="enroll"
                          className="font-bold text-xs text-black uppercase"
                        >
                          Date
                        </label>
                      </div>
                      <Print inputType={Text} maxLength={8} />
                    </div>
                    <div className="flex gap-2 items-center">
                      <label htmlFor="">ALC Code</label>
                      <input type="" className="border border-black " />
                    </div>
                    <div className="w-[187px] h-[104px]">
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to="/"
                      >
                        <img src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                </div>
                <h2 className="text-end font-bold text-lg lg:text-xl rounded-full bg-[#E70000] capitalize text-white px-6 py-2 ">
                  Application form
                </h2>
                <div className="flex gap-2 flex-col">
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor=""
                      className="text-black text-base font-semibold"
                    >
                      Form No:
                    </label>{" "}
                    <span className="text-xl font-medium text-[#e70000]">
                      456789098765
                    </span>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-black text-base font-semibold"
                    >
                      Enrollment No:
                    </label>
                    <input
                      type=""
                      className="border border-black outline-none px-2 py-1"
                    />
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-black text-base font-semibold"
                    >
                      Roll No:
                    </label>
                    <input
                      type=""
                      className="border border-black outline-none px-2 py-1"
                    />
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-black text-base font-semibold"
                    >
                      Admission No:
                    </label>
                    <input
                      type=""
                      className="border border-black outline-none px-2 py-1"
                    />
                  </div>
                </div>
              </div>
              <p className="font-normal text-base text-black text-center capitalize px-12">
                कृपया फॉर्म केवल अंग्रेजी और बड़े अक्षरों में भरें। Please fill
                the form in English and CAPITAL LETTERS only.
                <br />• सभी * चिह्नित फ़ील्ड अनिवार्य हैं। उपयुक्त ब्रैकेट पर
                टिक करें &#9745; • All fields marked * are Mandatory. Tick the
                appropriate bracket &#9745;
              </p>
              <div className="flex">
                <div className=" px-4 py-2 bg-[#F37F7F] w-full">
                  <h2 className="text-center font-normal text-xl text-black">
                    केवल आवेदक द्वारा भरा जाना है To be filled in by the
                    Applicant only
                  </h2>
                </div>
              </div>

              <div className="flex gap-3 justify-between">
                <div className=" w-9/12 border-r border-black flex flex-col justify-center">
                  {/* STUDENTS DETAILS */}
                  <div className="mt-2 flex flex-wrap items-center px-4">
                    <div className="w-1/4 ps-2">
                      <label
                        htmlFor="enroll"
                        className="font-bold text-xs text-black uppercase"
                      >
                        center name & address (leave blank)
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                        type="text"
                        className="border border-black outline-none px-2 py-1 w-full h-7"
                      />
                    </div>
                  </div>

                  <div className="mt-2 flex items-center px-4">
                    <div className="w-1/4 ps-2">
                      <label
                        htmlFor="enroll"
                        className="font-bold text-xs text-black uppercase"
                      >
                        course applied for (leave blank)
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                        type="text"
                        className="border border-black outline-none px-2 py-1 w-full h-7"
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center px-4">
                    <div className="w-1/4 ps-2">
                      <label
                        htmlFor="enroll"
                        className="font-bold text-xs text-black uppercase"
                      >
                        course code (leave blank)
                      </label>
                    </div>

                    <div className="w-3/4">
                      <input
                        type="text"
                        className="border border-black outline-none px-2 py-1 w-full h-7"
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center px-4">
                    <div className="w-1/4 ps-2">
                      <label
                        htmlFor="enroll"
                        className="font-bold text-xs text-black uppercase"
                      >
                        Gender
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        id=""
                      />
                      <div className=" flex gap-2 items-center capitalize text-xs font-semibod">
                        PPP ID
                        <div className="-mt-2">
                          <Print inputType={Text} maxLength={7} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="w-1/4 ps-2">
                      <label
                        htmlFor="enroll"
                        className="font-bold text-xs text-black  uppercase font-semibod"
                      >
                        Marital Status
                      </label>
                    </div>

                    <div className="flex gap-3">
                      <div className=" flex gap-2 items-center capitalize text-xs font-semibod">
                        Single{" "}
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-6 h-6 accent-red"
                        />
                      </div>
                      <div className=" flex gap-2 items-center capitalize text-xs font-semibod">
                        married
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-6 h-6 accent-red"
                        />
                      </div>

                      <div className=" flex gap-1 items-center capitalize text-xs font-semibod">
                        date of birth
                        <div className="-mt-2">
                          <Print inputType={Text} maxLength={8} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-5">
                    <div className="border-y border-black p-4 w-full">
                      <h2 className="text-start font-normal text-base text-gray_light">
                        As entered is Secondary / Senior Secondary Certificate
                      </h2>
                      {/* STUDENTS DETAILS 2 */}
                      <div className="mt-2 flex">
                        <div className="w-1/4 ps-2">
                          <label
                            htmlFor="enroll"
                            className="font-bold text-xs text-black uppercase"
                          >
                            NAME OF CANDIDATE
                          </label>
                        </div>
                        <input
                          name="firstName"
                          value={[formData.firstName]}
                          type="text"
                          className="border border-black outline-none px-2 py-1 w-full h-7"
                        />
                        {/* <Print inputType={Text} maxLength={20} /> */}
                      </div>
                      <div className="mt-2 flex">
                        <div className="w-1/4 ps-2">
                          <label
                            htmlFor="enroll"
                            className="font-bold text-xs text-black uppercase"
                          >
                            FATHER'S NAME
                          </label>
                        </div>
                        <input
                          value={formData.fatherName}
                          type="text"
                          className="border border-black outline-none px-2 py-1 w-full h-7"
                        />
                      </div>
                      <div className="mt-2 flex">
                        <div className="w-1/4 ps-2">
                          <label
                            htmlFor="enroll"
                            className="font-bold text-xs text-black uppercase"
                          >
                            MOTHER'S NAME
                          </label>
                        </div>
                        <input
                          name="mothername"
                          value={formData.motherName}
                          type="text"
                          className="border border-black outline-none px-2 py-1 w-full h-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-[115px] h-[154px] relative mt-2">
                    <div className="border-2 border-black w-full h-full absolute right-1 scale-y-105 bg-white flex justify-center items-center px-4">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full max-h-full"
                        />
                      ) : (
                        <label htmlFor="upload" className="cursor-pointer">
                          Click here to upload an image
                          <input
                            type="file"
                            id="upload"
                            accept="image/*"
                            className="hidden"
                            // value={formData.images}
                          />
                        </label>
                      )}
                    </div>

                    <div className="border-2 border-black w-full h-full absolute right-1 scale-y-105 bg-white flex justify-center items-center px-4">
                      {formData.images && (
                        <img
                          src={`https://persnal-details.onrender.com/uploads/${formData.images}`}
                          alt="Student"
                          className="w-40 h-40 object-cover rounded"
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-base text-black mt-3">
                    Passport Size Photograph
                  </p>
                  <div className="w-44 h-[100px] relative mt-5">
                    <div className="border-2 border-black w-full h-full absolute right-1 scale-y-105 bg-white flex justify-center items-center px-4">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full max-h-full"
                        />
                      ) : (
                        <label htmlFor="upload" className="cursor-pointer">
                          Click here to upload an image
                          <input
                            type="file"
                            id="upload"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      )}
                    </div>
                    <div className="border-2 border-black w-full h-full absolute right-1 scale-y-105 bg-white flex justify-center items-center px-4">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full max-h-full"
                        />
                      ) : (
                        <label
                          htmlFor="upload"
                          className="cursor-pointer text-center"
                        >
                          Click here to upload an image
                          <input
                            type="file"
                            id="upload"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                  <p className="text-base text-black mt-3">
                    Signature of Canditate
                  </p>
                  <div className="w-44 h-[100px] relative mt-5">
                    <div className="border-2 border-black w-full h-full absolute right-1 scale-y-105 bg-white flex justify-center items-center px-4">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full max-h-full"
                        />
                      ) : (
                        <label htmlFor="upload" className="cursor-pointer">
                          Click here to upload an image
                          <input
                            type="file"
                            id="upload"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      )}
                    </div>

                    <div className="border-2 border-black w-full h-full absolute right-1 scale-y-105 bg-white flex justify-center items-center px-4">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="max-w-full max-h-full"
                        />
                      ) : (
                        <label
                          htmlFor="upload"
                          className="cursor-pointer text-center"
                        >
                          Click here to upload an image
                          <input
                            type="file"
                            id="upload"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                  <p className="text-base text-black mt-3">Thumb Impression</p>
                </div>
              </div>

              <div className="flex">
                <div className=" p-4 w-full">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="mt-2 flex">
                        <div className="w-1/4 ps-2">
                          <label
                            htmlFor="enroll"
                            className="font-bold text-lg text-black uppercase"
                          >
                            Parmanent ADDRESS
                          </label>
                        </div>
                        {/* <Print inputType={Text} maxLength={60} /> */}
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <input
                          name="address"
                          value={formData.address}
                          type="text"
                          className="border border-black outline-none px-2 py-1 w-full h-7"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <label
                        className="font-bold text-xs text-black uppercase mt-2 me-2"
                        htmlFor="PIN CODE"
                      >
                        PIN CODE
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pinCode}
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex mt-3 w-full justify-between">
                    <h2 className="font-normal text-lg text-black capitalize">
                      CITY
                    </h2>
                    <input
                      className="outline-none bg-transparent border-b border-dashed px-2 w-[118px]"
                      type="text"
                      value={formData.city}
                      name="city"
                    ></input>
                    <h2 className="font-normal text-lg text-black capitalize">
                      STATE
                    </h2>
                    <input
                      name="state"
                      value={formData.state}
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[118px]"
                      type="text"
                    ></input>
                    <h2 className="font-normal text-lg text-black capitalize">
                      STD CODE
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[118px]"
                      type="number"
                    ></input>
                  </div>
                  <div className="flex mt-3 w-full justify-between">
                    <h2 className="font-normal text-lg text-black capitalize">
                      PH. NO.
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[187px]"
                      type="number"
                    ></input>
                    <h2 className="font-normal text-lg text-black capitalize">
                      MOBILE. NO.
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[187px]"
                      type="number"
                      name="mobileNo"
                      value={formData.mobileNo}
                    ></input>
                  </div>
                  <div className="flex mt-3 ">
                    <h2 className="font-normal text-lg text-black capitalize whitespace-nowrap">
                      E-MAIL
                    </h2>
                    <input
                      name="emailId"
                      value={formData.emailId}
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-full"
                      type="email"
                    ></input>
                  </div>
                </div>
                <div className="border border-r-0 border-t-0 border-black p-4 w-full ">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="mt-2 flex">
                        <div className="w-1/4 ps-2">
                          <label
                            htmlFor="enroll"
                            className="font-bold text-lg text-black uppercase"
                          >
                            Mailing ADDRESS
                          </label>
                        </div>
                        {/* <Print inputType={Text} maxLength={60} /> */}
                      </div>
                      <div className="flex flex-col w-full gap-2">
                        <input
                          name="address"
                          value={formData.address}
                          type="text"
                          className="border border-black outline-none px-2 py-1 w-full h-7"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-end">
                      <label
                        className="font-bold text-xs text-black uppercase mt-2 me-2"
                        htmlFor="PIN CODE"
                      >
                        PIN CODE
                      </label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pinCode}
                        id=""
                      />
                    </div>
                  </div>
                  <div className="flex mt-3 w-full justify-between">
                    <h2 className="font-normal text-lg text-black capitalize">
                      CITY
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[118px]"
                      type="text"
                      name="city"
                      value={formData.city}
                    ></input>
                    <h2 className="font-normal text-lg text-black capitalize">
                      STATE
                    </h2>
                    <input
                      name="state"
                      value={formData.state}
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[118px]"
                      type="text"
                    ></input>
                    <h2 className="font-normal text-lg text-black capitalize">
                      STD CODE
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[118px]"
                      type="number"
                    ></input>
                  </div>
                  <div className="flex mt-3 w-full justify-between">
                    <h2 className="font-normal text-lg text-black capitalize">
                      PH. NO.
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[191px]"
                      type="number"
                    ></input>
                    <h2 className="font-normal text-lg text-black capitalize">
                      MOBILE. NO.
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-[191px]"
                      type="number"
                    ></input>
                  </div>
                  <div className="flex mt-3">
                    <h2 className="font-normal text-lg text-black capitalize whitespace-nowrap">
                      E-MAIL
                    </h2>
                    <input
                      className="outline-none bg-transparent  border-b border-dashed px-2 w-full"
                      type="email"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="border-y border-black w-full">
                <h1 className="text-center">
                  Any change in address should be immediately communicated to
                  the institute
                </h1>
              </div>
              <div className="w-full p-4">
                <div className="flex justify-between">
                  <label
                    className="font-bold text-xs text-black uppercase"
                    htmlFor="NATIONALITY"
                  >
                    NATIONALITY
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    id=""
                  />
                  <label
                    className="font-bold text-xs text-black uppercase ms-4"
                    htmlFor="CATEGORY"
                  >
                    CATEGORY
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    className="border-b border-dashed outline-none"
                  />
                </div>

                <div className="flex w-full justify-between mt-2">
                  <h2 className="font-bold text-base text-black capitalize">
                    HAVE YOU EVER BEEN DEBARRED BY ANY UNIVERSITY/BOARD?
                  </h2>
                  <input
                    type="text"
                    name="debarred"
                    value={formData.debarred}
                    id="text"
                  />
                </div>
                <div className=" w-full">
                  <div className="flex items-center">
                    <label className="font-bold text-base text-black capitalize">
                      APPLICANT AADHAR NO.
                    </label>
                    <input
                      type="text"
                      name="aadharNo"
                      value={formData.aadharNo}
                      id=""
                    />

                    <h2 className="font-bold text-base text-black capitalize ms-4">
                      FATHER/HUSBAND OCCUPATION
                    </h2>
                    <input
                      type="text"
                      name="fatherOrHusbandOccupation"
                      value={formData.fatherOrHusbandOccupation}
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className=" px-4 py-1 bg-[#F37F7F] w-full flex justify-center items-center">
                <span className="text-black text-2xl">ABC ID</span>
                <div className="-mt-2">
                  {" "}
                  <Print inputType={Text} maxLength={16} />
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-xl">
                  Current profile of applicant:{" "}
                  <sup className="text-red">*</sup>
                  <span className="font-normal text-lg">
                    (you may tick multiple options)
                  </span>
                </h2>
                <div className="flex flex-wrap gap-5 mt-2">
                  {[
                    "Student",
                    "Housewife",
                    "Employed",
                    "Unemployed",
                    "Self Employed",
                    "Student",
                    "Housewife",
                    "Employed",
                    "Unemployed",
                    "Self Employed",
                    "Student",
                    "Housewife",
                    "Employed",
                    "Unemployed",
                    "Self Employed",
                  ].map((option, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <label
                          htmlFor=""
                          className="text-lg text-black font-semibold capitalize"
                        >
                          {option}
                        </label>
                        <input type="checkbox" className="w-6 h-6 accent-red" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex gap-3 justify-between items-center p-4 py-2 border-y border-black">
                <div className="flex gap-3 items-center py-2">
                  <h2 className="text-black text-xl ">
                    Are you physically challanged
                  </h2>
                  <div className="flex gap-3">
                    {" "}
                    <label
                      htmlFor=""
                      className="text-lg text-black font-semibold capitalize"
                    >
                      yes
                    </label>
                    <input type="checkbox" className="w-6 h-6 accent-red" />
                  </div>
                  <div className="flex gap-3">
                    {" "}
                    <label
                      htmlFor=""
                      className="text-lg text-black font-semibold capitalize"
                    >
                      no
                    </label>
                    <input type="checkbox" className="w-6 h-6 accent-red" />
                  </div>
                </div>
                <div className="flex gap-3 items-center w-7/12">
                  <label
                    htmlFor=""
                    className="text-lg text-black font-semibold capitalize whitespace-nowrap"
                  >
                    Nature of Disability
                  </label>
                  <input
                    type="text"
                    className="border border-black outline-none px-2 py-1 w-full h-7"
                  />
                </div>
              </div>
              <div className="w-full p-4 ">
                <table className="text-center border border-black w-full">
                  <tr>
                    <th colSpan={10}>
                      <div className="text-start ps-2">
                        <h2 className="font-bold text-xs text-black uppercase">
                          DETAILS OF PREVIOUS EXAMINATIONS PASSED FROM OTHER
                          BOARD/UNIVERSITY
                        </h2>
                        <h2 className="font-normal text-md">
                          (Enclose Duly Attested/Notarized, Self-Attested
                          Photocopies of the Previous Mark Cards /
                          Documents/Certificates)
                        </h2>
                      </div>
                    </th>
                  </tr>
                  <tr className="border">
                    <th className="border border-black"> S.No.</th>
                    <th className="border border-black"> NAME OF EXAM</th>
                    <th className="border border-black"> ROLL NO.</th>
                    <th className="border border-black"> PASSING YEAR</th>
                    <th className="border border-black">MARKS OBTAINED</th>
                    <th className="border border-black">NAME OF BOARD</th>
                    <th className="border border-black">PERCENTAGE</th>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black">1</td>
                    <td className="border border-black">
                      {formData.nameOfExam}
                    </td>
                    <td className="border border-black">{formData.rollNo}</td>
                    <td className="border border-black">
                      {formData.passingYear}
                    </td>
                    <td className="border border-black">
                      {formData.marksObtained}
                    </td>
                    <td className="border border-black">
                      {formData.boardUniversity}
                    </td>
                    <td className="border border-black">
                      {formData.percentage}
                    </td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black">2</td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black">3</td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black">4</td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black">5</td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black">6</td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black">7</td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                    <td className="border border-black"></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        {location.pathname !== "/application-form/print-preview" ? (
          <Link
            to="/application-form/payment"
            className="font-bold text-xl md:text-2xl bg-red leading-6 px-6  py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
          >
            next
          </Link>
        ) : (
          <ReactToPrint
            trigger={() => (
              <button className="font-bold text-xl md:text-2xl bg-red leading-6 px-6  py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300">
                Print
              </button>
            )}
            content={() => printRef.current}
          />
        )}
      </div>
    </div>
  );
};

export default PrintInfo;
