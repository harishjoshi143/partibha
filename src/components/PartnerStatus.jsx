import React from "react";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

const PartnerStatus = () => {
  // Status data
  const statusList = [
    { step: "Application", status: "Complete" },
    { step: "Payment", status: "Complete" },
    { step: "Document Verification", status: "Pending" },
    { step: "Site Visit", status: "Pending" },
    { step: "Final Verification", status: "Pending" },
    { step: "Center Allotment", status: "Pending" },
    { step: "Center Code Generated", status: "Pending" },
  ];

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-red">
        Partner Onboarding Status
      </h2>
      <div className="space-y-3">
        {statusList.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors p-2 rounded-lg border border-gray-200"
          >
            <div className="flex items-center gap-3">
              {item.status === "Complete" ? (
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
              ) : (
                <ClockIcon className="h-5 w-5 text-yellow-500" />
              )}
              <span className="text-gray-800 font-medium">{item.step}</span>
            </div>
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full
                ${
                  item.status === "Complete"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerStatus;
