import React, { createContext, useContext, useState } from "react";

const NoteContext = createContext();
export const NoteProvider = () => {
  return useContext(NoteContext);
};
const StateProvider = ({ children }) => {


  const [showNav, setShowNav] = useState(false);
  const [dashboardSidebar, setDashboardSidebar] = useState(false);

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        "https://pratibha-logo.onrender.com/api/v1/categories"
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      // Validate data structure
      if (Array.isArray(data)) {
        setCourses(data);
      } else if (data && Array.isArray(data.data)) {
        setCourses(data.data);
      } else {
        console.warn("Unexpected API response structure:", data);
        setCourses([]);
      }
    } catch (err) {
      console.error("Course API Error:", err);
      setError("Failed to load courses. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- HANDLE PAYMENT ----------------
  // const handlePayment = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://razorpay-node-app.onrender.com/create-order",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ amount: 10500 }), // ₹10500
  //       }
  //     );

  //     if (!response.ok) {
  //       const errorText = await response.text();
  //       alert("Order creation failed: " + errorText);
  //       return;
  //     }

  //     const data = await response.json();

  //     if (!window.Razorpay) {
  //       alert("Razorpay SDK failed to load.");
  //       return;
  //     }

  //     const options = {
  //       key: "rzp_live_Cjg9pdloH2HyGV",
  //       amount: data.amount,
  //       currency: data.currency,
  //       name: "Pratibha IT Education",
  //       description: "Franchisee Fee Payment",
  //       order_id: data.id,
  //       handler: (response) => {
  //         alert("Payment Successful! ID: " + response.razorpay_payment_id);
  //         navigate("/application-form/print-preview");
  //       },
  //       prefill: {
  //         name: "Your Customer Name",
  //         email: "email@example.com",
  //         contact: "9999999999",
  //       },
  //       theme: { color: "#f56565" },
  //       modal: {
  //         ondismiss: function () {
  //           alert("Payment cancelled");
  //         },
  //       },
  //     };

  //     const rzp = new window.Razorpay(options);
  //     rzp.open();
  //   } catch (error) {
  //     alert("Something went wrong: " + error.message);
  //   }
  // };





  const value = {
    showNav,
    setShowNav,
    dashboardSidebar,
    setDashboardSidebar,
    courses,
    setCourses,
    loading,
    setLoading,
    error,
    setError,
    fetchCourses, 
  };
  return (
    <>
      <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
    </>
  );
};

export default StateProvider;
