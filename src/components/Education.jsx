import React from "react";
import bms_logo from "../assets/bms_logo.png";
import asu_logo from "../assets/asu_logo.png";
export default function Education() {
  return (
    <div className="education-wrapper">
      <h5 className="font-weight-bold resume-section-title">Education</h5>
      <div className="row">
        <div className="subsection col-sm-6">
          <div className="row">
            <div className="col-sm-2">
              <img className="logo" src={asu_logo} alt="ASU logo" />
            </div>
            <div className="col-sm-10">
              <h6 className="font-weight-bold">
                Arizona State University
                <span className="float-right">Aug 2019 - May 2021</span>
              </h6>
              <p className="location">
                <span className="fa fa-map-marker"></span> Tempe, AZ
              </p>
              <p className="font-weight-bold">
                Master of Science - MS, Computer Science
              </p>
              <p className="font-weight-bold">CGPA: 3.78 / 4</p>
              <p className="core-subjects">
                <span className="font-weight-bold">Core Subjects:</span> Intro
                to AI, Data Visualization, Data Mining, Statistical Machine
                learning, Human Computer Interaction
              </p>
            </div>
          </div>
        </div>
        <div className="subsection col-sm-6">
          <div className="row">
            <div className="col-sm-2">
              <img className="logo" src={bms_logo} alt="BMS logo" />
            </div>
            <div className="col-sm-10">
              <h6 className="font-weight-bold">
                BMS College of Engineering
                <span className="float-right">Sep 2012 - Jun 2016</span>
              </h6>
              <p className="location">
                <span className="fa fa-map-marker"></span> Bangalore, KA
              </p>
              <p className="font-weight-bold">
                Bachelor of Engineering - BE, Computer Science
              </p>
              <p className="font-weight-bold">CGPA: 8.73 / 10</p>
              <p className="core-subjects">
                <span className="font-weight-bold">Core Subjects:</span>{" "}
                Algorithms and DS, Web Programming, RDBMS, Operating Systems,
                Object Oriented Programming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
