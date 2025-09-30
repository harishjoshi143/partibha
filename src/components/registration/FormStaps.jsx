


import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import { steps } from "../common/Helper";

const FormStaps = () => {
  const location = useLocation(); 
  const currentStepIndex = steps.findIndex((step) =>
    Array.isArray(step.path) ? step.path.includes(location.pathname) : location.pathname === step.path
  ) === -1 
    ? 0 
    : steps.findIndex((step) =>
        Array.isArray(step.path) ? step.path.includes(location.pathname) : location.pathname === step.path
      );
    

  return (
    <div className="overflow-auto rounded-[20px]">
      <div className="bg-gray_light flex gap-12 rounded-[20px] px-6 py-3 justify-between w-[640px] sm:w-full">
        {steps.map((step, index) => {
         const isActive = index <= currentStepIndex;

          return (
            <span
              key={index}
              className={`flex items-center justify-center p-1.5 h-10 w-10 border-2 rounded-full relative ${
              
                isActive
                  ? "border-red after:absolute after:h-full after:w-0.5 after:bg-red after:top-1/2 after:-right-[80%] xl:after:-right-[90%] after:-translate-y-1/2"
                  : ""
              }`}
            >
              {React.cloneElement(step.icons, {
                svgColor: isActive ? "red" : "white", 
              })}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FormStaps;
