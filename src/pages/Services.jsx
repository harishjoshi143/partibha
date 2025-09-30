import React from "react";
import StudentsZone from "../components/student-zone/StudentsZone";
import { servicesList } from "../components/common/Helper";

const Services = () => {
  return (
    <div>
      <StudentsZone mapData={servicesList} heading="Our Services" />
    </div>
  );
};

export default Services;
