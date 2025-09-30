import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const checklistItems = [
  'Minimun five desktop computer/leptops system with i5 6th gen 8gb ram 19" LED',
  "One printing machine",
  "One office Room",
  "Two class room",
  "One computer lab",
  "Reception area",
  "Washroom",
  "Drinking water",
  "Waiting area",
  "Internet connection with 100 Mbps speed plan",
  "24 hours power backup system",
];

const MinimumRequirements = () => {
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);
  const [otherFacility, setOtherFacility] = useState("");

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      minimumRequirements: selectedItems,
      otherFacility,
    };
    sessionStorage.setItem("minimumRequirement", JSON.stringify(data));
    navigate("/partner-registeration/documents"); // change route as needed
  };

  return (
    <div className="custom_container mx-auto px-3 md:px-5 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray_light mb-6">
        Minimum Requirements
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1  gap-4">
          {checklistItems.map((item, index) => (
            <label key={index} className="flex items-center gap-2 text-base lg:text-xl text-gray_light">
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheckboxChange(item)}
                className="w-5 h-5"
              />
              {item}
            </label>
          ))}
        </div>

        {/* Other input */}
        <div className="mt-6">
          <label className="text-base lg:text-xl text-gray_light capitalize block mb-2">
            Other Facility (if any)
          </label>
          <input
            type="text"
            value={otherFacility}
            onChange={(e) => setOtherFacility(e.target.value)}
            placeholder="Mention any other facility"
            className="w-full border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
          />
        </div>

        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="font-bold text-xl md:text-2xl px-6 py-2 capitalize rounded-full duration-300 
              bg-red text-white hover:bg-transparent hover:text-red hover:border-red border border-transparent"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default MinimumRequirements
