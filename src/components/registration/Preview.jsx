import React from "react";
import { Link } from "react-router-dom";
import previewImg from "../../assets/images/svg/preview-img.svg";

const Preview = ({ handleNext }) => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl md:text-[32px] text-center leading-8 text-gray_light capitalize relative after:absolute after:w-[107px] after:h-0.5 after:bg-gray_light inline-block after:right-[56%] after:-bottom-4 before:absolute before:w-[107px] before:h-0.5 before:bg-gray_light before:left-[56%] before:-bottom-4">
          PREVIEW
          <span className="inline-block w-3 h-3 bg-red absolute left-1/2 -translate-x-1/2 -bottom-5 "></span>
        </h2>
      </div>
      <h2 className="font-extrabold text-3xl lg:text-[40px] text-red capitalize mt-10 lg:mt-20">
        note:-
      </h2>
      <p className="font-normal text-xl lg:text-[32px] text-gray_light capitalize text-center mt-2 lg:leading-[48px]">
        अपने आवेदन का सावधानीपूर्वक पूर्वावलोकन करें, शुल्क जमा करने के बाद
        संपादन की अनुमति नहीं है
      </p>
      <p className="font-normal text-xl lg:text-[32px] text-gray_light capitalize text-center lg:leading-[48px]">
        Preview Your Application Carefully Not Editing Allowed After fee
        Submission{" "}
      </p>
      <div className="flex flex-col items-center mt-10 lg:mt-20 ">
        <Link to="/application-form/information-preview">
          <img src={previewImg} alt="preview-img" />
        </Link>
        <p className="font-normal text-xl lg:text-[32px] text-gray_light capitalize text-center mt-4 lg:leading-[48px]">
          अपने आवेदन का पूर्वावलोकन करने के लिए यहां क्लिक करें
        </p>
        <p className="font-normal text-xl lg:text-[32px] text-gray_light capitalize text-center lg:leading-[48px] ">
          Click here to Preview your application{" "}
        </p>
      </div>
      <div className="flex justify-end gap-5 mt-10">
        <Link
          to="/application-form/upload-documents"
          className="font-bold text-xl md:text-2xl bg-red leading-6 px-6  py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
        >
          Previous
        </Link>
        <Link
          onClick={handleNext}
          to="/application-form/pay"
          className="font-bold text-xl md:text-2xl bg-red leading-6 px-6  py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
        >
          Pay
        </Link>
      </div>
    </div>
  );
};

export default Preview;
