import React from "react";
import { StudentsReportsData } from "../common/Helper";
import { CalenderIcon2 } from "../common/Icon";

const PartnerReports = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <h2 className="font-semibold text-lg text-[#343434] uppercase px-4 py-4 border-b-2 border-black">
        REPORTS
      </h2>
      <div className="py-5 px-3 flex flex-wrap">
        {StudentsReportsData.map((report, index) => {
          return (
            <div
              key={index}
              className="px-3 w-full xl:w-1/2 mt-6 overflow-x-auto"
            >
              <div className=" bg-[#C5E0B4] rounded-[18px] shadow-[0px_0px_4px_4px_#00000040] w-[493px] sm:w-full">
                <div className="bg-[#A9D18E] rounded-[18px_18px_0px_0px] py-[5.14px]  ">
                  <h1 className="text-base font-extrabold text-[#343434] text-center leading-[24px] ">
                    TOTAL REGISTERED STUDENTS REPORTS
                  </h1>
                </div>

                <div className="flex gap-[21.94px] items-center justify-center pt-[7.35px] pb-[9.39px] ">
                  <div className="flex gap-[6.94px] items-center ">
                    <p className="text-[7px] text-[#343434] font-semibold leading-[10.5px] ">
                      Total Student
                    </p>
                    <p className="border border-[#343434] rounded-[18px] p-[1px_12px] text-[7px] text-[#343434] font-semibold leading-[10.5px]">
                      1520
                    </p>
                  </div>
                  <p className="text-[7px] text-[#343434] font-semibold leading-[10.5px] ">
                    Day Wise Report
                  </p>
                  <div className="flex gap-[2.95px] items-center ">
                    <p className="text-[7px] text-[#343434] font-semibold leading-[10.5px] ">
                      Date Wise Report
                    </p>
                    <span>
                      <CalenderIcon2 />{" "}
                    </span>
                  </div>
                  <p className="text-[7px] text-[#343434] font-semibold leading-[10.5px] ">
                    Monthly Report
                  </p>
                  <p className="text-[7px] text-[#343434] font-semibold leading-[10.5px] ">
                    Annual Report
                  </p>
                </div>

                <div className=" px-2 overflow-auto h-[207px] ">
                  <table className="w-full">
                    <thead className="border-t border-b border-black ">
                      <th className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] w-[64px] ">
                        Student Id
                      </th>
                      <th className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] w-[110px] ">
                        Student Details
                      </th>
                      <th className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] w-[69px] ">
                        Course Code
                      </th>
                      <th className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] w-[118px] ">
                        Course Name
                      </th>
                      <th className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] w-[54px] ">
                        Fee
                      </th>
                      <th className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] w-[46px] ">
                        Status
                      </th>
                    </thead>

                    {report.students.map((item, i) => {
                      return (
                        <tbody key={i}>
                          <td className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] border border-black text-center ">
                            {item.id}
                          </td>
                          <td className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] border border-black text-center ">
                            {item.detail}
                          </td>
                          <td className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] border border-black text-center ">
                            {item.courseCode}
                          </td>
                          <td className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] border border-black text-center ">
                            {item.courseName}
                          </td>
                          <td className="text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] border border-black text-center ">
                            {item.fee}
                          </td>
                          <td
                            className={`text-[7px] text-[#343434] font-semibold leading-[10.5px] py-[1.11px] border border-black text-center ${
                              item.status === "Passed"
                                ? "text-[#057817]"
                                : item.status === "Fail"
                                ? "text-[#BC0402]"
                                : "text-[#DC6A00]"
                            } `}
                          >
                            {item.status}
                          </td>
                        </tbody>
                      );
                    })}
                  </table>
                </div>

                <div className="bg-[#A9D18E] rounded-[0px_0px_18px_18px] pt-[11.94px] pb-[9.15px] pe-[30.05px] text-end ">
                  <button className="text-[7px] text-white font-semibold leading-[10.64px] p-[.03px_5px_1.02px_6px] bg-[#BC0402] rounded-[18px] ">
                    Download Reports
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnerReports;
