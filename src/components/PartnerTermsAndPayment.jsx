import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const PartnerTermsAndPayment = () => {
  const { handlePayment } = useAuth();

  const [agreed, setAgreed] = useState(false);
  const [brandingOpted, setBrandingOpted] = useState(false);

  // Compute total amount
  const baseFee = 10500;
  const brandingFee = brandingOpted ? 5000 : 0;
  const totalFee = baseFee + brandingFee;

  const proceedToPayment = () => {
    // You can pass the total amount if needed
    handlePayment(totalFee);
  };

  return (
    <div className="custom_container mx-auto px-3 md:px-5 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray_light mb-6">
        Terms & Conditions
      </h2>

      {/* Terms Checkbox */}
      <div className="flex items-start gap-2 mb-6">
        <input
          type="checkbox"
          id="terms"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1"
        />
        <label htmlFor="terms" className="text-base md:text-xl text-gray_light">
          I have read and agree to the terms and conditions provided by the organization.
        </label>
      </div>

      {/* Branding Material Row */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="branding"
            checked={brandingOpted}
            onChange={(e) => setBrandingOpted(e.target.checked)}
          />
          <label htmlFor="branding" className="text-base md:text-xl text-gray_light">
            Branding Material
          </label>
        </div>
        <p className="text-base md:text-xl font-medium text-black">
          Pay extra ₹5,000/- for branding material
        </p>
      </div>

      {/* Franchise Fee */}
      <p className="text-lg md:text-2xl font-semibold text-red mb-10">
        Total Payable Amount: ₹{totalFee.toLocaleString()}
      </p>

      {/* Payment Button */}
      <div className="flex justify-end">
        <button
          disabled={!agreed}
          onClick={proceedToPayment}
          className={`font-bold text-xl md:text-2xl px-6 py-2 capitalize rounded-full duration-300
            ${agreed ? "bg-red text-white hover:bg-transparent hover:text-red hover:border-red" : "bg-gray-400 text-white cursor-not-allowed"}
            border border-transparent`}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PartnerTermsAndPayment;
