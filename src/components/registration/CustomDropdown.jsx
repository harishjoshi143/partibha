import React, { useState, useEffect, useRef } from "react";
import { DropdownIcon } from "../common/Icon";

const CustomDropdown = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    onChange(option);
    setOpen(false);
  };

  return (
    <div onClick={toggleDropdown} className="relative " ref={dropdownRef}>
      <span className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">
        <DropdownIcon />
      </span>
      <div className="border border-black rounded-lg text-base font-normal text-[#a49d9d] shadow-input_shadow py-1.5 px-2 cursor-pointer">
        {selectedValue || "Select"}
      </div>
      {open && (
        <div className="absolute top-full left-0 w-full border border-black rounded-lg bg-white shadow-input_shadow">
          {options.map((option, index) => (
            <div
              key={index}
              className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${
                option === selectedValue && "bg-gray-200"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
