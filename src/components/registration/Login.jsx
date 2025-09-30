



// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { login, error, loading,partnerLogin } = useAuth();

//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });

//   const [formError, setFormError] = useState("");

//   const handleChange = (event) => {
//     setUserData({ ...userData, [event.target.name]: event.target.value });
//   };
//   const queryParams = new URLSearchParams(location.search);
//     const role = queryParams.get("role");
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormError("");

//     let success = false;

//     if (role === "partner") {
//       success = await partnerLogin(userData);
//       if (!success) {
//         setFormError("Partner login failed. Please check your credentials.");
//         return;
//       }
//       navigate("/partners-dashboard");
//     } else {
//       // if role is 'student' or null
//       success = await login(userData);
//       if (!success) {
//         setFormError("Student login failed. Please check your credentials.");
//         return;
//       }
//       navigate("/student-dashboard");
//     }

//     setUserData({ email: "", password: "" });
//   };

//    useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       if (role === "partner") {
//         navigate("/partners-dashboard");
//       } else {
//         navigate("/student-dashboard");
//       }
//     }
//   }, [location, navigate]);

//   return (
//     <div className="lg:px-10 w-full py-10 lg:py-0">
//       <div className="flex flex-col justify-center lg:h-[470px]">
//         <h2 className="font-bold text-[32px] text-gray_light capitalize text-center mb-10">
//         {role === "partner" ? "Partner Login" : "Student Login"}
//         </h2>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//           <div className="flex flex-col gap-2">
//             <label htmlFor="email" className="font-normal text-base lg:text-xl text-black capitalize">
//               Email
//             </label>
//             <input
//               className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
//               type="email"
//               required
//               id="email"
//               name="email"
//               value={userData.email}
//               onChange={handleChange}
//               placeholder="email"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label htmlFor="password" className="font-normal text-base lg:text-xl text-black capitalize">
//               Password
//             </label>
//             <input
//               className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
//               type="password"
//               required
//               id="password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}
//               placeholder="enter password"
//             />
//           </div>

//    {(formError || error) && (
//             <span className="text-red text-base">{formError || error}</span>
//           )}

//           <span>
//             <Link className="font-normal text-base lg:text-lg text-[#2b40e0] text-center capitalize -mt-3">
//               Forgot Password
//             </Link>
//           </span>
//           <span>
//             <button
//               type="submit"
//               disabled={loading}
//               className="font-bold text-base md:text-xl bg-red leading-6 px-6 py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
//             >
//               {loading ? "Signing in..." : "Sign in"}
//             </button>
//           </span>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, error, loading, partnerLogin } = useAuth();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState("");

  // 🧠 Get params from URL
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get("role");
  const redirect = queryParams.get("redirect");

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    let success = false;

    if (role === "partner") {
      success = await partnerLogin(userData);
      if (!success) {
        setFormError("Partner login failed. Please check your credentials.");
        return;
      }
      navigate("/partners-dashboard");
    } else {
      // student or null
      success = await login(userData);
      if (!success) {
        setFormError("Student login failed. Please check your credentials.");
        return;
      }

      // ✅ Redirect to specific service if provided
      if (redirect) {
        navigate(`/student-dashboard/${redirect}`);
      } else {
        navigate("/student-dashboard");
      }
    }

    setUserData({ email: "", password: "" });
  };

  // ✅ If already logged in, also redirect accordingly
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      if (role === "partner") {
        navigate("/partners-dashboard");
      } else {
        if (redirect) {
          navigate(`/student-dashboard/${redirect}`);
        } else {
          navigate("/student-dashboard");
        }
      }
    }
  }, [location, navigate]);

  return (
    <div className="lg:px-10 w-full py-10 lg:py-0">
      <div className="flex flex-col justify-center lg:h-[470px]">
        <h2 className="font-bold text-[32px] text-gray_light capitalize text-center mb-10">
          {role === "partner" ? "Partner Login" : "Student Login"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-normal text-base lg:text-xl text-black capitalize"
            >
              Email
            </label>
            <input
              className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
              type="email"
              required
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-normal text-base lg:text-xl text-black capitalize"
            >
              Password
            </label>
            <input
              className="outline-none border border-gray_light shadow-input_shadow rounded-lg py-1.5 px-2"
              type="password"
              required
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="enter password"
            />
          </div>

          {(formError || error) && (
            <span className="text-red text-base">{formError || error}</span>
          )}

          <span>
            <Link
              className="font-normal text-base lg:text-lg text-[#2b40e0] text-center capitalize -mt-3"
              to="/forgot-password"
            >
              Forgot Password
            </Link>
          </span>
          <span>
            <button
              type="submit"
              disabled={loading}
              className="font-bold text-base md:text-xl bg-red leading-6 px-6 py-1.5 text-white inline-block capitalize rounded-full border border-transparent hover:border-red hover:text-red hover:bg-transparent duration-300"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
