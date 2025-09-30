import React, { useEffect, useState } from "react";
import { GoBackIcon } from "../common/Icon";
import { NoteProvider } from "../../context/StateProvider";

const StudentsBoard = () => {
  const { setDashboardSidebar } = NoteProvider();

  const [formData, setFormData] = useState({
    firstName: "",
    gender: "",
    aadharNo: "",
    category: "",
    emailId: "",
    fatherName: "",
    lastName: "",
    mobileNo: "",
    motherName: "",
    nationality: "",
    address: "",
    city: "",
    pinCode: "",
  });

  // 🟢 Fetch student data
  useEffect(() => {
    const getStudentData = async () => {
      try {
        const res = await fetch(
          "https://persnal-details.onrender.com/api/students"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data, // student data set
        }));
      } catch (error) {
        console.log("Student API error:", error);
      }
    };

    getStudentData();
  }, []);

  // 🟢 Fetch address data
  useEffect(() => {
    const getAddressData = async () => {
      try {
        const res = await fetch(
          "https://address-api-z6zt.onrender.com/api/addresses"
        );
        const data = await res.json();
        setFormData((prev) => ({
          ...prev,
          ...data[0]?.permanentAddress,
        }));
      } catch (error) {
        console.log("Address API error:", error);
      }
    };

    getAddressData();
  }, []);
  console.log(formData);

  return (
    <div className="mx-auto">
      <h2 className="font-semibold text-xs md:text-lg text-[#343434] uppercase px-4 py-4 border-b-2 border-black flex items-center gap-2">
        <span
          onClick={() => setDashboardSidebar(true)}
          className="sm:hidden block"
        >
          <GoBackIcon />
        </span>{" "}
        DASHBOARD
      </h2>

      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center bg-[#A9D18E] p-1.5">
        Profile
      </p>

      <div className="flex flex-wrap py-5 px-3 sm:px-7">
        {/* Left Column */}
        <div className="w-full xl:w-1/2">
          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Student Name:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.firstName}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Father Name:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.fatherName}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Mother Name:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.motherName}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Contact No.:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.mobileNo}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Email ID:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.emailId}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">Gender:-</strong>
            <span className="ps-3 sm:ps-16">{formData.gender}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full xl:w-1/2">
          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">Address:-</strong>
            <span className="ps-3 sm:ps-16">{`${formData.address}, ${formData.city},${formData.pinCode}`}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Nationality:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.nationality}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Category:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.category}</span>
          </div>

          <div className="pb-3">
            <strong className="inline-block sm:min-w-[120px]">
              Aadhar No.:-
            </strong>
            <span className="ps-3 sm:ps-16">{formData.aadharNo}</span>
          </div>
        </div>
      </div>

      {/* Dummy Table - Optional */}
      <p className="font-semibold text-xs md:text-lg text-[#343434] text-center bg-[#A9D18E] p-1.5 mt-6">
        Live Sessions
      </p>
      <div className="my-5 px-7 overflow-auto">
        <table className="min-w-full border-collapse w-[1000px]">
          <thead>
            <tr className="bg-[#A9D18E]">
              <th className="border border-black px-4 py-2">Session</th>
              <th className="border border-black px-4 py-2">Start Date</th>
              <th className="border border-black px-4 py-2">Duration</th>
              <th className="border border-black px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-white odd:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                Computer Fundamental
              </td>
              <td className="border border-gray-300 px-4 py-2">10-09-2024</td>
              <td className="border border-gray-300 px-4 py-2">
                04:00 pm to 05:30 pm
              </td>
              <td className="border border-gray-300 px-4 py-2">Attended</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsBoard;
