import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

import covid_viz from "../assets/covid_viz.png";
import sorter_viz from "../assets/sorter_viz.png";
import aus_open_viz from "../assets/aus_open_viz.png";

export default class Projects extends Component {
  state = {
    projects: [
      {
        projectId: "covid_viz",
        name: "COVID-19 Visualizer",
        link: "https://shubhamsoengg.github.io/covid-visualizer/",
        description:
          "Developed a tool where the growth and the spread of the covid-19 cases can be seen in the United states of America over the span of 3 months. The visualization can be seen as a form of a simulation which gets triggered on a button click. The simulation shows the spread for each day from the first case recorded in the USA for the next 3 months. The line chart also shows the prediction for the next 2 weeks which has been implemented using machine learning algorithms like Autoregression. Google charts have been used for the development of the charts. For the bubble chart and the bar chart, data has been obtained using text mining from different websites and then D3.js has been used for the rendering of the charts. ",
        imageName: covid_viz,
        techStack:
          "HTML,CSS,JavaScript,D3.js,Google Charts,Python,Autoregression",
      },
      {
        projectId: "sorter_viz",
        name: "Sorting Visualizer",
        link: "https://shubhamsoengg.github.io/sorting-visualizer/",
        description:
          "Demonstrated various sorting algoritms which can be seen as a form of visualization. 4 of the most common sorting algorithms have been implemented namely Bubble Sort, Merge Sort, Quick Sort, Insertion Sort. The sort operations can be started by clicking on any sorting button. The speed of the sort can be increased or decreased as per the user's convenience. The reset button stops the animation and resets the bars randomly. ",
        imageName: sorter_viz,
        techStack: "HTML,CSS,JavaScript,React,Algorithms",
      },
      {
        projectId: "aus_viz",
        name: "Aus Open Visualizer",
        link: "https://shubhamsoengg.github.io/AusOpenViz/",
        description:
          "Implemented the visualization of Australian open tennis Championships. The visualization depicts the number of championships won by players within a duration of 10 years from 2004 to 2014. It's an interative visualization where on click of any section of the donut chart, the stats of that particular player can be see on the right. D3.js and svg has been used for the development of the charts. ",
        imageName: aus_open_viz,
        techStack: "HTML,CSS,JavaScript,D3.js",
      },
    ],
  };
  render() {
    return (
      <div className="projects-wrapper">
        <h3 className="text-center projects-heading">My Projects</h3>
        <div className="project-list">
          {this.state.projects.map((project) => (
            <ProjectCard key={project.projectId} project={project} />
          ))}
        </div>
      </div>
    );
  }
}
