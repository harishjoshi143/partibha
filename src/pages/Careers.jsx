import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Careers = () => {
  const location=useLocation();
  const jobPosts = [
    {
      id: 1,
      postName: "Frontend Developer",
      department: "IT",
      totalPosts: 2,
      link: "/careers/frontend-developer",
    },
    {
      id: 2,
      postName: "Graphic Designer",
      department: "Design",
      totalPosts: 1,
      link: "/careers/graphic-designer",
    },
    {
      id: 3,
      postName: "HR Executive",
      department: "Human Resources",
      totalPosts: 1,
      link: "/careers/hr-executive",
    },
    {
      id: 4,
      postName: "Network Engineer",
      department: "IT",
      totalPosts: 1,
      link: "/careers/network-engineer",
    },
  ];

  return (
    <>
      {location.pathname !== "/careers/details" && ( <div className=" mx-auto px-4 py-10 lg:py-16 ">
      <h1 className="text-3xl font-bold text-red capitalize text-center">
        Recruitments
      </h1>
       <p className="font-normal text-lg mt-2 text-center  mb-8 ">
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add.
          </p>

      <div className="overflow-x-auto shadow ">
        <table className="min-w-full bg-white border border-gray-300 border-collapse">
          <thead>
            <tr className="bg-red-500 text-black">
              <th className="py-3 px-4 border border-gray-300 text-left w-[40px]">S.No</th>
              <th className="py-3 px-4 border border-gray-300 text-left w-[300px]">Post Name</th>
              <th className="py-3 px-4 border border-gray-300 text-left w-[200px]">Department</th>
              <th className="py-3 px-4 border border-gray-300 text-left w-[40px]">Total Posts</th>
              <th className="py-3 px-4 border border-gray-300 text-left w-[140px]">Post Link</th>
            </tr>
          </thead>
          <tbody>
            {jobPosts.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 transition">
                <td className="py-3 px-4 border border-gray-300 w-[40px]">{job.id}</td>
                <td className="py-3 px-4 border border-gray-300 w-[240px]">{job.postName}</td>
                <td className="py-3 px-4 border border-gray-300 w-[240px]">{job.department}</td>
                <td className="py-3 px-4 border border-gray-300 w-[40px]">{job.totalPosts}</td>
                <td className="py-3 px-4 border border-gray-300 w-[140px]">
                  <a
                    href={job.link}
                    className="text-red hover:underline"
                  >
                   Application
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
          
          {/* Placement Button */}
      <div className="mt-8 flex justify-center">
        <Link
          to="details"
           className="font-bold text-base md:text-xl bg-red leading-6 px-6 py-2.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
        >
          Placement Application Form
        </Link>
      </div>
    </div>)}
     
      <Outlet/>
    </>
  );
};

export default Careers;
