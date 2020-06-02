import React from "react";

import Education from "./Education";
import Experience from "./Experience";
import Skillset from "./Skillset";
import resume from "../assets/SHUBHAM_GOYAL_RESUME.pdf";
import Award from "./Award";
import Recommendation from "./Recommendation";
export default function Resume() {
  const recommendations = [
    {
      id: 1,
      name: "Indraneel Peratla",
      position: "Director, Advanced Analytics",
      company: "GE Healthcare",
      content:
        "Among all the strengths that Shubham brings to the organization his profound sense to learn newer technologies to solve for business problems. A good communicator he has always demonstrated clarity of thought and good understanding of processes, in the short time I had a chance to work with him.",
    },
    {
      id: 2,
      name: "Sweekar Tanugula",
      position: "Senior Product Manager",
      company: "GE Healthcare",
      content:
        "Shubham is a great expert at developing web applications. In partnership with Shubham - we developed a prototype for GE Healthcare - to make public data available for business analysts. With great knowledge on web scraping & database technologies - this prototype was very successful and we were eventually able to scale it to a web application. His dedication and positive attitude to learn new things - made this prototype a successful application. Thank you Shubham - it was a great partnership",
    },
  ];
  return (
    <div className="resume-wrapper">
      <h3 className="resume-title text-center">
        My Resume
        <a href={resume} download className="pdf-download">
          <i className="fa fa-file-pdf-o fa-lg"></i> Download PDF
        </a>
      </h3>

      <div className="row">
        <div className="col-sm-12">
          <Education />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Experience />
        </div>
      </div>
      <div className="row">
        <Skillset />
      </div>
      <div className="row">
        <Award />
      </div>
      <div className="row">
        <Recommendation recommendations={recommendations} />
      </div>
    </div>
  );
}
