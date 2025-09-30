import React, { useRef } from "react";

const Print = ({inputType, maxLength }) => {
  const inputs = useRef([]);

  const handleChange = (index, e) => {
    if (index < maxLength - 1) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <div className="flex flex-wrap gap-0.5 ps-2">
      {Array.from({ length: maxLength }).map((_, index) => (
        <input
          readOnly
          ref={(input) => (inputs.current[index] = input)}
          key={index}
          type={inputType}
          maxLength="1"
          onChange={(e) => handleChange(index, e)} 
          className="w-6 h-6 border border-gray-400 text-center mt-2"
        />
      ))}
    </div>
  );
};

export default Print;
