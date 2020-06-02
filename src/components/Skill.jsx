import React from "react";

export default function Skill(props) {
  return (
    <div className="col-sm-4 skill-wrapper">
      <span>{props.skill.skill}</span>
      <div className="skill">
        <div style={{ width: props.skill.level * 10 + "%" }}></div>
      </div>
    </div>
  );
}
