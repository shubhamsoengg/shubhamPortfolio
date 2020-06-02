import React from "react";

import mcf_logo from "../assets/mcf_logo.png";
import ge_logo from "../assets/ge_logo.png";

export default function Experience() {
  return (
    <div className="experience-wrapper">
      <h5 className="font-weight-bold resume-section-title">Experience</h5>
      <div className="row">
        <div className="subsection col-sm-6">
          <div className="row">
            <div className="col-sm-2">
              <img className="logo" src={mcf_logo} alt="ASU logo" />
            </div>
            <div className="col-sm-10">
              <h6 className="font-weight-bold">
                McFadyen Digital
                <span className="float-right font-weight-bold">
                  Aug 2016 - Jun 2019
                </span>
              </h6>
              <p className="location">
                <span className="fa fa-map-marker"></span> Bangalore, KA
              </p>
              <p>Software Engineer Level 1</p>
              <ul className="work-desc">
                <li>
                  Designed and developed web layouts and functionality for
                  clients in the e-commerce domain
                </li>
                <li>
                  Improved the conversion rate and decreased the page load time
                  from 14 seconds to 4 seconds for “Alpha Industries” by
                  optimizing images and the number of redirects.
                </li>
                <li>
                  Increased the page views by 30% by bolstering the page ranking
                  through Search Engine Optimization techniques.
                </li>
                <li>
                  Worked closely with the client to understand client needs and
                  was involved in planning and delegation activities for the UI
                  team.{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="subsection col-sm-6">
          <div className="row">
            <div className="col-sm-2">
              <img className="logo" src={ge_logo} alt="BMS logo" />
            </div>
            <div className="col-sm-10">
              <h6 className="font-weight-bold">
                GE Healthcare
                <span className="float-right font-weight-bold">
                  Jan 2016 - Jun 2016
                </span>
              </h6>
              <p className="location">
                <span className="fa fa-map-marker"></span> Bangalore, KA
              </p>
              <p>Web Application Developer Intern</p>
              <ul className="work-desc">
                <li>
                  Worked on medical data collection from various data sites
                  using web scraping tools.
                </li>
                <li>
                  Created a data warehouse using the data collected and
                  automated the entire process.
                </li>
                <li>
                  Created an application for the admin user for easy access to
                  the data using web technologies and Python
                </li>
                <li>
                  The app was designed to be used, along with other software, in
                  predictive analysis for the healthcare market.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
