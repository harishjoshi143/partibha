import React from "react";

const students = [
  {
    rollNo: "202492000451",
    name: "Pawan Kumar So Satbir Singh, Village Mirzapur Hisar",
  },
  {
    rollNo: "202492000452",
    name: "Anil Kumar So Satyanw, Village Mirzapur Hisar",
  },
  {
    rollNo: "202492000453",
    name: "Kavita So Nafe Singh, Village Mirzapur Hisar",
  },
  {
    rollNo: "202492000454",
    name: "Poonam Rani So Satbir, Village Mirzapur Hisar",
  },
  {
    rollNo: "202492000455",
    name: "Pawan Kumar So Balwant, Village Mirzapur Hisar",
  },
  {
    rollNo: "202492000456",
    name: "Rakesh Kumar So Balbir Singh, Village Mirzapur Hisar",
  },
  { rollNo: "202492000457", name: "Anita So Kaliram, Village Mirzapur Hisar" },
];

const PartnersExams = () => {
  return (
    <div className="p-4 mx-auto overflow-hidden">
      <h2 className="font-semibold text-lg text-[#343434] uppercase px-4 py-4 border-b-2 border-black mb-5 text-center  ">
        STUDENTS LIST FOR EXAMINATIONS
      </h2>
      <div className="overflow-x-auto md:mx-10 ">
        <table className=" border-collapse w-[1000px]">
          <thead>
            <tr>
              <th>
                <div className="text-xl font-bold py-2 px-2 text-left border border-[#358301] shadow-tabsBackdrop bg-[#A9D18E] mx-1">
                  {" "}
                  STUDENT ROLL NO
                </div>
              </th>
              <th>
                <div className="text-xl font-bold py-2 px-2 text-left border border-[#358301] shadow-tabsBackdrop bg-[#A9D18E] mx-1">
                  {" "}
                  STUDENT ROLL NO
                </div>
              </th>
              <th>
                <div className="text-xl font-bold py-2 px-2 text-left border border-[#358301] shadow-tabsBackdrop bg-[#A9D18E] mx-1">
                  {" "}
                  STUDENT ROLL NO
                </div>
              </th>
            </tr>
            <tr className="h-5"></tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <div key={index} className="contents">
                <tr className="h-2"></tr>
                <tr>
                  <td className="px-1">
                    <h2 className="text-sm font-normal py-2 px-4 rounded-full text-center bg-[#C5E0B4] shadow-tabsBackdrop">
                      {student.rollNo}
                    </h2>
                  </td>

                  <td className="px-1">
                    <h2 className="text-sm font-normal py-2 px-4 rounded-full text-center bg-[#C5E0B4] shadow-tabsBackdrop">
                      {student.name}
                    </h2>
                  </td>
                  <td className="px-1">
                    <div className="py-2 px-4 rounded-full text-center bg-[#C5E0B4] shadow-tabsBackdrop">
                      {" "}
                      <button className="text-black px-2 text-sm font-normal ">
                        Click Here to Start Exam
                      </button>
                    </div>
                  </td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnersExams;
