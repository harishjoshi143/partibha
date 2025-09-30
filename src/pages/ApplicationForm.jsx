import React, { useState } from "react";
import { Outlet,  useLocation,  useNavigate } from "react-router-dom";
import SideBarForm from "../components/registration/SideBarForm";
import FormStaps from "../components/registration/FormStaps";

const ApplicationForm = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);

  
  return (
    <div className="py-14 lg:py-24 overflow-hidden">
      <div className="custom_container mx-auto px-3 md:px-5 ">
        <div className="flex flex-wrap lg:justify-center -mx-2">
          {location.pathname !== "/application-form/information-preview" && <div className="w-full lg:w-1/3 px-2">
            <SideBarForm />
          </div>}
          <div className={`w-full px-2 mt-14 lg:mt-0 ${location.pathname === "/application-form/information-preview" ? "w-full" : "lg:w-2/3"}`}>
            <div className="lg:ps-6">
              <div className="pb-9 lg:pb-16">
                <FormStaps
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                />
              </div>

              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
