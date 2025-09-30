import React, { useState } from "react";
import AuthSideBar from "./AuthSideBar";
import SignUp from "./SignUp";

const NewRagistration = () => {
  const [swipeAuth, setSwipeAuth] = useState(false);
  return (
    <div className="py-12 lg:py-24 ">
      <div className="custom_container mx-auto px-3 md:px-5">
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12">
            {" "}
            <div
              className={`flex flex-wrap justify-center rounded-[30px] overflow-hidden duration-500 relative shadow-backdrop`}
            >
              <div className="w-full sm:w-1/3">
                <AuthSideBar
                  hide="hidden"
                  swipeAuth={swipeAuth}
                  setSwipeAuth={setSwipeAuth}
                />
              </div>
              <div className="w-full sm:w-2/3">
                <SignUp swipeAuth={swipeAuth} setSwipeAuth={setSwipeAuth} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRagistration;
