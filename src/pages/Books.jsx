import React from "react";
import Bookimg from "../assets/images/webp/bookimg.webp";
import SearchInput from "../components/course/SearchInput";
import { Download_icon } from "../components/common/Icon";
import { Link, Outlet, useLocation } from "react-router-dom";

const Books = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/books" && (
        <div className="py-12 md:py-16 lg:py-24  ">
          <div className="custom_container mx-auto px-3 md:px-5">
            <SearchInput courseName={"Books and library"} />
            <div className="mt-12">
              <h2 className="font-bold text-2xl text-center capitalize mb-10">
                free books and notes{" "}
              </h2>
              <div className="flex flex-wrap ">
                {" "}
                {[1, 1, 1, 1, 1, 11, , 11, 1, 1, 1, , 1, 1, 1, 1].map(
                  (_, I) => {
                    return (
                      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[14%] px-2 mt-7">
                        <img
                          className="w-full h-44 rounded-3xl object-cover"
                          src={Bookimg}
                          alt="Bookimg"
                        />
                        <p className=" font-bold text-xs mt-2 flex justify-between items-center">
                          Java Programming{" "}
                          <span>
                            <Link
                              to="reads"
                              className="border px-2 rounded-xl capitalize"
                            >
                              read
                            </Link>
                          </span>
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <p className=" py-1 px-3 bg-red text-white rounded-3xl text-xs ">
                            Price -{" "}
                            <span
                              style={{
                                textDecorationLine: "line-through",
                                textDecorationThickness: "1.5px",
                              }}
                              st
                            >
                              110₹
                            </span>{" "}
                            0 ₹
                          </p>
                          <button className="font-bold text-base md:text-xl px-2 py-1 border border-transparent">
                            <Download_icon />
                          </button>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            {/* paid books */}
            <div className="mt-12">
              <h2 className="font-bold text-2xl text-center capitalize mb-10">
                Payed Books And Notes
              </h2>
              <div className="flex flex-wrap">
                {" "}
                {[1, 1, 1, 1, 1, 11, , 11, 1, 1, 1, , 1, 1, 1, 1].map(
                  (_, I) => {
                    return (
                      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-[14%] px-2 mt-7">
                        <img
                          className="w-full h-44 rounded-3xl object-cover"
                          src={Bookimg}
                          alt="Bookimg"
                        />
                        <p className=" font-bold text-xs mt-2 flex justify-between items-center">
                          Java Programming{" "}
                          <span>
                            <a
                              href=""
                              className="border px-2 rounded-xl capitalize"
                            >
                              read
                            </a>
                          </span>
                        </p>
                        <div className="flex justify-between items-center mt-2">
                          <p className=" py-1 px-3 bg-red text-white rounded-3xl text-xs  ">
                            Price -{" "}
                            <span
                              style={{
                                textDecorationLine: "line-through",
                                textDecorationThickness: "1.5px",
                              }}
                              st
                            >
                              150₹
                            </span>{" "}
                            110 ₹
                          </p>
                          <button className="font-bold text-base md:text-xl px-2 py-1 border border-transparent">
                            <Download_icon />
                          </button>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Books;
