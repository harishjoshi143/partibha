import { Link } from "react-router-dom";

const Admission = ({ mapdata }) => {
  const location = window.location.pathname;
  const title = location.split("/")[2];
  console.log(title);

  return (
    <div>
      <h2 className="font-semibold text-lg text-[#343434] uppercase px-4 py-4 border-b-2 border-black">
        {title || "Dashboard"}
      </h2>
      <div className="flex flex-wrap justify-center mt-14 px-6 ">
        {mapdata.map((items, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/12 p-2 min-h-[115px]"
          >
            <Link to={`${items.path}`}>
              {" "}
              <div className=" px-4 py-5 h-full flex items-center justify-center bg-[#C5E0B4] rounded-[18px] shadow-backdrop">
                <h2 className="font-extrabold text-base text-[#343434] uppercase text-center">
                  {items.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
