import React, { createContext, useContext, useState } from "react";

const LoginSignUpContext = createContext();     

export const useFormDataContext = () => useContext(LoginSignUpContext);

const FormContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



const StudentInfo = async (formData) => {
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  try {
    setLoading(true);
    setError("");

    const response = await fetch("https://persnal-details.onrender.com/api/students", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server error:", errorText);
      return false; // ❌ Something went wrong on server
    }

    const result = await response.json();
    console.log("Success:", result);
    return true; // ✅ API success — let frontend proceed
  } catch (err) {
    setError("Something went wrong.");
    console.error(err);
    return false; // ❌ Return false on fetch failure
  } finally {
    setLoading(false);
  }
};


  const QualificationInfo = async (qualifications, file) => {
  console.log(file, qualifications, "file");

  try {
    setLoading(true);
    setError("");

    for (let qualification of qualifications) {
      const formData = new FormData();

      formData.append("nameOfExam", qualification.examName);
      formData.append("rollNo", qualification.roll);
      formData.append("boardUniversity", qualification.board);
      formData.append("passingYear", qualification.passingYear);
      formData.append("marksObtained", qualification.marksObtains);
      formData.append("totalMarks", qualification.totalMarks);
      formData.append("percentage", qualification.percentage);

     if (file) {
        formData.append("image", file); 
      }

      const response = await fetch("https://qualification-api-2.onrender.com/api/qualifications", {
        method: "POST",
        body: formData, 
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server error response:", errorText);
        throw new Error("Server returned an error");
      }

      const result = await response.json();
      console.log("Qualification submitted:", result);
    }

    return true;
  } catch (err) {
    setError("Failed to submit qualification.");
    console.error("QualificationInfo error:", err);
    return false;
  } finally {
    setLoading(false);
  }
};


const addressInfo = async (formData) => {
  try {
    setLoading(true);
    setError("");

    const response = await fetch("https://address-api-z6zt.onrender.com/api/addresses", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (err) {
    setError("Something went wrong.");
    console.error(err);
  } finally {
    setLoading(false);
  }
};
  
  
  const UploadIdsInfo = async (file) => {
   console.log(file,"fikesd")
  const formData = new FormData();
  formData.append("images", file);

  try {
    const res = await fetch("https://photo-api-s42q.onrender.com/api/photos", {
      method: "POST",
      body: formData,
    });

    const contentType = res.headers.get("content-type");

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Server error:", errorText);
      return;
    }

    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      console.log("Uploaded successfully:", data);
      return data;
    } else {
      const text = await res.text();
      console.error("Expected JSON, got:", text);
    }

  } catch (error) {
    console.error("Upload failed", error);
  }
};
  const subscribeWithMail = async (email) => {
  try {
    const res = await fetch("https://news-mail-api.onrender.com/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const contentType = res.headers.get("content-type");

    if (!res.ok) {
      let errorMessage = "Something went wrong";

      if (contentType?.includes("application/json")) {
        const errorData = await res.json();
        errorMessage = errorData.message || errorMessage;
      } else {
        errorMessage = await res.text();
      }

      console.error("Server error:", errorMessage);
      return { success: false, error: errorMessage };
    }

    if (contentType?.includes("application/json")) {
      const data = await res.json();
      console.log("Subscribed successfully:", data);
      return { success: true, data };
    } else {
      const text = await res.text();
      console.warn("Expected JSON, got:", text);
      return { success: false, error: "Unexpected response format" };
    }
  } catch (error) {
    console.error("Request failed:", error);
    return { success: false, error: "Network error" };
  }
};





    const value = {
    StudentInfo,loading, setLoading, error, setError,QualificationInfo,addressInfo,UploadIdsInfo,subscribeWithMail
    }

  return (
    <LoginSignUpContext.Provider value={value}>
      {children}
    </LoginSignUpContext.Provider>
  );
};



export default FormContext
