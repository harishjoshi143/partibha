import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerTabsData } from "../Helper";
import { NoteProvider } from "../../../context/StateProvider";

const HeaderTabs = ({ router }) => {
  const { showNav, setShowNav } = NoteProvider();
  const [isOpen, setIsOpen] = useState(false);
  if (isOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <>
      <div
        onClick={() => setShowNav(false)}
        className={`fixed top-0 w-screen h-screen lg:hidden ${
          showNav ? "right" : "-right-full"
        }`}
      ></div>
      <div
        className={`bg-red lg:w-full fixed lg:sticky top-1 w-[250px] h-[390px] lg:h-auto -mt-2 max-lg:px-2
       duration-300 ${
         showNav
           ? "right-0 lg:top-auto top-[110px] sm:top-[165px] mt-0"
           : "-right-full lg:top-auto -top-full mt-0"
       }`}
      >
        <div className="custom_container mx-auto px-3 md:px-5 py-3 h-full">
          <div className="flex flex-col lg:flex-row h-full justify-center lg:items-center gap-2 lg:gap-5 xl:gap-8 lg:justify-end">
            {headerTabsData.map((obj, index) => (
              <Link
                key={index}
                onClick={() => {
                  setShowNav(false);
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }}
                to={`${obj.path}`}
                className={`font-normal navtabs text-white duration-300 text-base xl:text-lg lg:leading-7 uppercase ${
                  router.pathname === obj.path ? "active_tabs" : ""
                }`}
              >
                {obj.tabName}
              </Link>
            ))}
            <div className="relative lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="font-medium text-base text-[#121212] leading-6 px-3 py-1 bg-white inline-block capitalize rounded-full border border-transparent hover:border-white hover:text-white hover:bg-transparent duration-300"
              >
                Login
              </button>
              {isOpen && (
                <div
                  onClick={() => setIsOpen(false)}
                  className="fixed top-0 left-0 w-screen h-screen"
                ></div>
              )}
              {isOpen && (
                <div className="absolute right-0 top-11 w-36 bg-white shadow-xl rounded-lg">
                  {/* Dropdown content */}
                  <ul>
                    <li
                      onClick={() => setIsOpen(false)}
                      className="font-medium text-base text-[#121212] capitalize hover:bg-gray-200 hover:bg-red hover:text-white duration-300"
                    >
                      <Link
                        className="px-3 py-2 inline-block"
                        to="/login?role=student"
                      >
                        student login
                      </Link>
                    </li>
                    <li
                      onClick={() => setIsOpen(false)}
                      className="font-medium text-base text-[#121212] capitalize hover:bg-gray-200 hover:bg-red hover:text-white duration-300"
                    >
                      <Link
                        className="px-3 py-2 inline-block"
                        to="/login?role=partner"
                      >
                        Partner Login
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="lg:hidden">
                  <Link
                to={'/partner-registeration'}
                 onClick={() => {
                  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                }}
                  className="font-medium text-base text-[#010101] leading-6 px-3 py-1 bg-white inline-flex capitalize rounded-full border border-transparent hover:border-white hover:text-white hover:bg-transparent duration-300 "
                >
               Franchise
                </Link>
         </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTabs;
