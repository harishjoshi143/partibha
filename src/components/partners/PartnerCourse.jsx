import React from "react";
const PartnerCourse = ({ mapdata }) => {
  return (
    <div className="px-5 sm:px-10">
      {mapdata.map((course, index) => {
        console.log(course)
        return (
          <div key={index}>
            <h2 className="font-semibold text-lg text-[#343434] uppercase py-4 border-b-2 border-black">
             {course.heading}
            </h2>
            <div className="overflow-x-auto mt-6">
             {course.table.map((course, index) =>(
               <table key={index} className="min-w-full border-collapse  w-[1000px]">
               <thead>
                 <tr className="bg-[#A9D18E] mb-4">
                   <th className="border border-black px-4 py-2">
                     {course.courseCode}
                   </th>
                   <th className="border border-black px-4 py-2">
                     {" "}
                     {course.courseName}
                   </th>
                   <th className="border border-black px-4 py-2">
                     {course.durationDate}
                   </th>
                   <th className="border border-black px-4 py-2">
                     {course.courseFees}
                   </th>
                   <th className="border border-black px-4 py-2">
                     {course.StatusOrInsentive}
                   </th>
                   <th className="border border-gray-300 px-4 py-2">
                     {course.link}
                   </th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="h-4"></tr>
                 {course.details.map((course, index) => (
                   <tr className="even:bg-white odd:bg-gray-100">
                     <td className="border border-gray-300 px-4 py-2">
                       {course.code}
                     </td>
                     <td className="border border-gray-300 px-4 py-2">
                       {course.name}
                     </td>
                     <td className="border border-gray-300 px-4 py-2">
                       {course.durationDate}
                     </td>
                     <td className="border border-gray-300 px-4 py-2">
                       {course.fee}
                     </td>
                     <td
                       className={`border border-gray-300 px-4 py-2 ${course.feeStatusStyling}`}
                     >
                       {course.incentiveOrStatus}
                     </td>
                     <td
                       className={`border border-gray-300 px-4 py-2 text-blue-600 underline cursor-pointer ${course.linkStyling}`}
                     >
                       {course.link}
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
             ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PartnerCourse;
