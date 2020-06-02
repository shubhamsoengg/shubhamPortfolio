import React from "react";
import Skill from "./Skill";

export default function Skillset() {
  const skills = [
    {
      skill: "React.js/Redux",
      level: 9,
    },
    {
      skill: "Python",
      level: 9,
    },
    {
      skill: "CSS3",
      level: 8,
    },
    {
      skill: "JavaScript",
      level: 8,
    },
    {
      skill: "Algorithms/Data Structures",
      level: 8,
    },
    {
      skill: "Knockout.js",
      level: 8,
    },
    {
      skill: "Oracle Commerce Cloud",
      level: 8,
    },
    {
      skill: "Git",
      level: 8,
    },
    {
      skill: "HTML5",
      level: 7,
    },
    {
      skill: "D3.js",
      level: 7,
    },

    {
      skill: "jQuery",
      level: 7,
    },
    {
      skill: "Bootstrap 4",
      level: 7,
    },
    {
      skill: "Beautiful Soup",
      level: 7,
    },
    {
      skill: "Object Oriented Programming",
      level: 7,
    },

    {
      skill: "Bitucket",
      level: 7,
    },
    {
      skill: "MySQL",
      level: 6,
    },
    {
      skill: "Flask",
      level: 6,
    },
    {
      skill: "SASS",
      level: 6,
    },
    {
      skill: "Node.js",
      level: 5,
    },

    {
      skill: "Numpy",
      level: 4,
    },
    {
      skill: "Angular.js",
      level: 4,
    },
    {
      skill: "C/C++",
      level: 4,
    },
  ];
  return (
    <div className="skillset-wrapper">
      <h5 className="font-weight-bold resume-section-title">Skillset</h5>
      <div className="row skill-list">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
}
