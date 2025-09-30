// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const documentFields = [
//   { id: "photo", label: "Applicant Photo" },
//   { id: "sign", label: "Applicant Signature" },
//   { id: "aadhar", label: "Aadhar Card" },
//   { id: "pan", label: "PAN Card" },
//   { id: "accountCopy", label: "Current Account Copy" },
//   { id: "qualification", label: "Last Qualification Documents" },
//   { id: "centerReg", label: "Center Registration Document" },
//   { id: "centerInterior", label: "Center Interior Photo (class, office, lab, reception)" },
//   { id: "centerExterior", label: "Center Exterior Photo (center front)" },
//   { id: "rentAgreement", label: "Minimum 11 Month Rent Agreement" },
//   { id: "geoLocation", label: "Center Geo Location (Longitude & Latitude)" },
// ];

// const PartnerDocuments = () => {
//   const navigate = useNavigate();
//   const [documents, setDocuments] = useState({});

//   const handleFileChange = (e, id) => {
//     const file = e.target.files[0];
//     setDocuments((prev) => ({
//       ...prev,
//       [id]: file,
//     }));
//   };

//   const handleGeoChange = (e, field) => {
//     const value = e.target.value;
//     setDocuments((prev) => ({
//       ...prev,
//       geoLocation: {
//         ...prev.geoLocation,
//         [field]: value,
//       },
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const docData = {};
//     for (let key in documents) {
//       if (key === "geoLocation") {
//         docData[key] = documents[key]; // store object with lat & lng
//       } else {
//         docData[key] = documents[key]?.name || "";
//       }
//     }

//     sessionStorage.setItem("partnerDocuments", JSON.stringify(docData));
//     navigate("/partner-registeration/terms"); // update path if needed
//   };

//   return (
//     <div className="custom_container mx-auto px-3 md:px-5 py-10">
//       <h2 className="text-2xl md:text-3xl font-bold text-gray_light mb-6">
//         Upload Partner Documents
//       </h2>

//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-wrap">
//           {documentFields.map((doc) => (
//             <div key={doc.id} className="w-full sm:w-1/2 px-2 mb-4">
//               <label className="block text-base lg:text-xl text-gray_light mb-1 capitalize">
//                 {doc.label} <span className="text-red">*</span>
//               </label>

//               {doc.id === "geoLocation" ? (
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     required
//                     placeholder="Latitude"
//                     value={documents.geoLocation?.lat || ""}
//                     onChange={(e) => handleGeoChange(e, "lat")}
//                     className="w-1/2 border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
//                   />
//                   <input
//                     type="text"
//                     required
//                     placeholder="Longitude"
//                     value={documents.geoLocation?.lng || ""}
//                     onChange={(e) => handleGeoChange(e, "lng")}
//                     className="w-1/2 border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
//                   />
//                 </div>
//               ) : (
//                 <input
//                   type="file"
//                   required
//                   accept="image/*,application/pdf"
//                   onChange={(e) => handleFileChange(e, doc.id)}
//                   className="w-full border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-end mt-10">
//           <button
//             type="submit"
//             className="font-bold text-xl md:text-2xl px-6 py-2 capitalize rounded-full duration-300 
//               bg-red text-white hover:bg-transparent hover:text-red hover:border-red border border-transparent"
//           >
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PartnerDocuments;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GeoLocationPicker from "./GeoLocationPicker";

const documentFields = [
  { id: "photo", label: "Applicant Photo" },
  { id: "sign", label: "Applicant Signature" },
  { id: "aadhar", label: "Aadhar Card" },
  { id: "pan", label: "PAN Card" },
  { id: "accountCopy", label: "Current Account Copy" },
  { id: "qualification", label: "Last Qualification Documents" },
  { id: "centerReg", label: "Center Registration Document" },
  { id: "centerInterior", label: "Center Interior Photo (class, office, lab, reception)" },
  { id: "centerExterior", label: "Center Exterior Photo (center front)" },
  { id: "rentAgreement", label: "Minimum 11 Month Rent Agreement" },

];

const PartnerDocuments = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState({});

  const handleFileChange = (e, id) => {
    const file = e.target.files[0];
    setDocuments((prev) => ({
      ...prev,
      [id]: file,
    }));
  };

  const handleLatLngSelect = (latlng) => {
    setDocuments((prev) => ({
      ...prev,
      geoLocation: {
        lat: latlng.lat,
        lng: latlng.lng,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const docData = {};
    for (let key in documents) {
      if (key === "geoLocation") {
        docData[key] = documents[key];
      } else {
        docData[key] = documents[key]?.name || "";
      }
    }

    sessionStorage.setItem("partnerDocuments", JSON.stringify(docData));
    navigate("/partner-registeration/terms");
  };

  return (
    <div className="custom_container mx-auto px-3 md:px-5 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray_light mb-6">
        Upload Partner Documents
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          {documentFields.map((doc) => (
            <div key={doc.id} className="w-full sm:w-1/2 px-2 mb-4">
              <label className="block text-base lg:text-xl text-gray_light mb-1 capitalize">
                {doc.label} <span className="text-red">*</span>
              </label>

              {doc.id === "geoLocation" ? ("") : (
                <input
                  type="file"
                  // required
                  accept="image/*,application/pdf"
                  onChange={(e) => handleFileChange(e, doc.id)}
                  className="w-full border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
                />
              )}
            </div>
          ))}
          

          <div className="w-full">
            <label className="block text-base lg:text-xl text-gray_light mb-1 capitalize">
                Center Geo Location <span className="text-red">*</span>
              </label>
                  <GeoLocationPicker setLatLng={handleLatLngSelect} />

                  <div className="flex gap-2 mt-2">
                    <input
                      type="text"
                      readOnly
                      placeholder="Latitude"
                      value={documents.geoLocation?.lat || ""}
                      className="w-1/2 border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
                    />
                    <input
                      type="text"
                      readOnly
                      placeholder="Longitude"
                      value={documents.geoLocation?.lng || ""}
                      className="w-1/2 border border-black rounded-lg text-base text-black shadow-input_shadow py-1.5 px-2"
                    />
                  </div>
                </div>
              
        </div>

        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="font-bold text-xl md:text-2xl px-6 py-2 capitalize rounded-full duration-300 
              bg-red text-white hover:bg-transparent hover:text-red hover:border-red border border-transparent"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};


export default PartnerDocuments
