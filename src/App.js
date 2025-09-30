/* eslint-disable no-undef */
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/common/navbar/Header";
import Hero from "./components/common/Hero";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import About from "./pages/About";
import PortFolio from "./pages/PortFolio";
import CoursesProgram from "./pages/CoursesProgram";
import StudentZone from "./pages/StudentZone";
import Blogs from "./pages/Blogs";
import ContectUs from "./pages/ContectUs";
import Authentication from "./pages/Authentication";
import ApplicationForm from "./pages/ApplicationForm";
import NewRagistration from "./components/registration/NewRagistration";
import PartnerDesboard from "./components/partners/PartnerDesboard";
import Protected from "./components/registration/Protected";
import Admission from "./components/partners/Admission";
import PartnerCourse from "./components/partners/PartnerCourse";
import {
  examRequestData,
  partnerAdmissionData,
  partnerCourseData,
  partnerFinanceData,
  pendingFeeData,
  ragistedStudentData,
} from "./components/common/Helper";
import PartnersExams from "./components/partners/PartnersExams";
import StudentDashboard from "./components/student-dashboard/StudentDashboard";
import StudentsBoard from "./components/student-dashboard/StudentsBoard";
import PartnerReports from "./components/partners/PartnerReports";
import Wallet from "./components/partners/Wallet";
import Address from "./components/registration/Address";
import Qualification from "./components/registration/Qualification";
import UploadDetails from "./components/registration/UploadDetails";
import PersonalDetails from "./components/registration/PersonalDetails";
import Results from "./components/Results";
import StudentsCourseDetails from "./components/student-dashboard/StudentsCourseDetails";
import ELibrary from "./components/student-dashboard/ELibrary";
import Attendance from "./components/student-dashboard/Attendance";
import Assignments from "./components/student-dashboard/Assignments";
import LiveClass from "./components/student-dashboard/LiveClass";
import ResultsAndCertificate from "./components/student-dashboard/ResultsAndCertificate";
import IdCard from "./components/student-dashboard/IdCard";
import PrintInfo from "./components/registration/PrintInfo";
import Payment from "./components/registration/Payment";
import GoTop from "./components/GoTop";
import Services from "./pages/Services";
import ServiceDetail from "./components/ServiceDetails";
import Careers from "./pages/Careers";
import Books from "./pages/Books";
import Read from "./components/Read";
import Finance from "./pages/Finance";
import PartnerStatus from "./components/PartnerStatus";

// Disable right-click
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

// Disable text selection
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

function App() {
  const location = useLocation();

  // Determine whether to show the header and footer
  const shouldShowHeaderFooter = !(
    location.pathname.startsWith("/partners") ||
    location.pathname.startsWith("/student-dashboard")
  );
  return (
    <>
      <div className="z-50 relative">
        <GoTop />
      </div>
      {shouldShowHeaderFooter && (
        <div>
          <div className="z-50 sticky top-[-37px] sm:top-[-47px] lg:top-[-146px] xl:top-[-136px]">
            <Header />
          </div> 
          <Hero />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/books" element={<Books />}>
          <Route path="reads" element={<Read />} />
        </Route>
        <Route path="/careers" element={<Careers />}>
          <Route
            path="details"
            element={<PersonalDetails displayStyling="hidden" />}
          />
        </Route>
        <Route path="/services/:serviceId" element={<ServiceDetail />} />

        <Route path="/portfolio" element={<PortFolio />} />
        <Route path="/our-courses/*" element={<CoursesProgram />} />
        <Route path="/student-corner" element={<StudentZone />} />
        <Route path="/login" element={<Authentication />} />

        <Route path="application-form" element={<ApplicationForm />}>
          <Route index element={<PersonalDetails />} />
          <Route path="address" element={<Address />} />
          <Route path="qualifications" element={<Qualification />} />
          <Route path="upload-documents" element={<UploadDetails />} />
          {/* <Route path="preview" element={<Preview />} /> */}
          <Route path="information-preview" element={<PrintInfo />} />
          <Route path="print-preview" element={<PrintInfo />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContectUs />} />
        <Route path="/sign-up" element={<NewRagistration />} />

        {/*  PARTNERS */}
        <Route
          path="partners-dashboard"
          element={<Protected Componants={PartnerDesboard} />}
        >
          <Route
            index
            element={
              <Protected
                Componants={Admission}
                componentProps={{ mapdata: partnerAdmissionData }}
              />
            }
          />
          <Route
            path="our-courses"
            element={
              <Protected
                Componants={PartnerCourse}
                componentProps={{ mapdata: partnerCourseData }}
              />
            }
          />
          <Route
            path="student-registration"
            element={
              <Protected
                Componants={PartnerCourse}
                componentProps={{ mapdata: ragistedStudentData }}
              />
            }
          />
          <Route
            path="fee-pending"
            element={
              <Protected
                Componants={PartnerCourse}
                componentProps={{ mapdata: pendingFeeData }}
              />
            }
          />
          <Route
            path="exam-request"
            element={
              <Protected
                Componants={PartnerCourse}
                componentProps={{ mapdata: examRequestData }}
              />
            }
          />
          <Route
            path="exam"
            element={
              <Protected
                Componants={PartnersExams}
                // componentProps={{ mapdata: examRequestData }}
              />
            }
          />
          <Route
            path="results"
            element={
              <Protected
                Componants={Results}
                // componentProps={{ mapdata: examRequestData }}
              />
            }
          />
          <Route
            path="application-status"
            element={
              <Protected
                Componants={PartnerStatus}
                // componentProps={{ mapdata: examRequestData }}
              />
            }
          />
           
          <Route
            path="application-form"
            element={<Protected Componants={ApplicationForm} />}
          >
            <Route index element={<Protected Componants={PersonalDetails} />} />
            <Route
              path="address"
              element={<Protected Componants={Address} />}
            />
            <Route
              path="qualifications"
              element={<Protected Componants={Qualification} />}
            />
            <Route
              path="upload-documents"
              element={<Protected Componants={UploadDetails} />}
            />
            <Route
              path="information-preview"
              element={<Protected Componants={PrintInfo} />}
            />
            <Route
              path="print-preview"
              element={<Protected Componants={PrintInfo} />}
            />
            <Route
              path="payment"
              element={<Protected Componants={Payment} />}
            />
          </Route>

          <Route
            path="partners-finances"
            element={
              <Protected
                Componants={Finance}
                componentProps={{ mapdata: partnerFinanceData }}
              />
            }
          />
          <Route
            path="partners-exams"
            element={<Protected Componants={PartnersExams} />}
          />
          <Route
            path="partners-courses"
            element={<Protected Componants={PartnerCourse} />}
          />
          <Route
            path="reports"
            element={<Protected Componants={PartnerReports} />}
          />
          <Route path="wallet" element={<Protected Componants={Wallet} />} />
        </Route>

        {/* STUDENT-DASHBOARD */}
        <Route path="/student-dashboard" element={<StudentDashboard />}>
          <Route index element={<StudentsBoard />} />
          <Route path="course-details" element={<StudentsCourseDetails />} />
          <Route path="e-library" element={<ELibrary />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="live-class" element={<LiveClass />} />
          <Route
            path="result-and-certificate"
            element={<ResultsAndCertificate />}
          />
          <Route path="identity-card" element={<IdCard />} />
        </Route>
      </Routes>
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

export default App;
