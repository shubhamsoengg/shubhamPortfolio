import React from "react";

export default function ProjectCard(props) {
  const parseTechStack = (techStack) => {
    const techArr = techStack.split(",");
    console.log(techArr);
    return techArr.map((tech) => (
      <li className="techElem" key={tech}>
        {tech}
      </li>
    ));
  };

  return (
    <div className="project-card row">
      <div className="col-sm-7 project-desc-wrapper">
        <h5 className="project-title text-left">{props.project.name}</h5>
        <div className="project-description">
          <p>{props.project.description}</p>
        </div>
        <div className="tech-stack">
          <span className="font-weight-bold">Tech Stack: </span>
          {parseTechStack(props.project.techStack)}
        </div>
        <a
          className="goto-link btn"
          href={props.project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on github.io
        </a>
      </div>
      <div className="col-sm-5">
        <img
          src={props.project.imageName}
          alt=""
          className="project-snapshot"
        />
      </div>
    </div>
  );
}
