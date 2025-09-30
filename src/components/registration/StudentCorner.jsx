import React from "react";
import SideBarForm from "./SideBarForm";
import Print from "./Print";
import Preview from "./Preview";
import { Route, Routes } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";

const StudentCorner = () => {
  return (
    <div className="py-14 lg:py-24 overflow-hidden">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-wrap lg:justify-center -mx-2">
          <div className="w-full lg:w-1/3 px-2">
            <SideBarForm />
          </div>
          <div className="w-full lg:w-2/3 px-2">
            <div className="mt-16 lg:ps-6">
              {" "}
              {/* <FormStaps /> */}
              {/* <PersonalDetails /> */}
              {/* <Print /> */}
              <Routes>
                <Route path="/" element={<PersonalDetails />} />
                <Route path="print" element={<Print />} />
                <Route path="/preview" element={<Preview />} />
              </Routes>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
