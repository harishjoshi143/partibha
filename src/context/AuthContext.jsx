import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignUpContext = createContext();
export const useAuth = () => useContext(LoginSignUpContext);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signup = async (data) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://livework-signup-login.onrender.com/api/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      console.log("Signup result:", result);

      if (!res.ok) {
        setError(result?.message || "Signup failed");
        return false;
      }

      setUser(result?.user || null);
      return true;
    } catch (err) {
      console.error("Signup error:", err);
      setError("Network error");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, password }) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://livework-signup-login.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const result = await res.json();
      console.log("Login result:", result);

      if (!res.ok) {
        setError(result?.message || "Login failed");
        return false;
      }

      if (result?.token) {
        localStorage.setItem("token", result.token);
      }

      return true;
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error during login");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const partnerLogin = async (data) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://your-partner-login-api.com/api/partner-login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      if (!res.ok) {
        setError(result?.message || "Partner login failed");
        return false;
      }

      localStorage.setItem("token", result.token);
      return true;
    } catch (err) {
      setError("Network error");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // ---------------- LOAD RAZORPAY SDK ----------------
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // ---------------- HANDLE PAYMENT ----------------
  const handlePayment = async () => {
    try {
      const response = await fetch(
        "https://razorpay-node-app.onrender.com/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 10500 }), // ₹10500
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        alert("Order creation failed: " + errorText);
        return;
      }

      const data = await response.json();

      if (!window.Razorpay) {
        alert("Razorpay SDK failed to load.");
        return;
      }

      const options = {
        key: "rzp_live_Cjg9pdloH2HyGV",
        amount: data.amount,
        currency: data.currency,
        name: "Pratibha IT Education",
        description: "Franchisee Fee Payment",
        order_id: data.id,
        handler: (response) => {
          alert("Payment Successful! ID: " + response.razorpay_payment_id);
          navigate("/application-form/print-preview");
        },
        prefill: {
          name: "Your Customer Name",
          email: "email@example.com",
          contact: "9999999999",
        },
        theme: { color: "#f56565" },
        modal: {
          ondismiss: function () {
            alert("Payment cancelled");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }
  };

  return (
    <LoginSignUpContext.Provider
      value={{
        loading,
        error,
        signup,
        login,
        user,
        partnerLogin,
        handlePayment,
      }}
    >
      {children}
    </LoginSignUpContext.Provider>
  );
};

export default AuthProvider;
