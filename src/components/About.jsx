import React from "react";

import "./styles.scss";

import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="overlay"></div>
      <div className="portfolio-title text-left">
        <h1>SHUBHAM GOYAL</h1>
      </div>
      <div className="about-tag text-left">
        <h2>Fullstack Developer | Technology Enthusiast </h2>
      </div>
      <div className="about-content">
        "Hi, I'm Shubham. I am currently a Masters student at Arizona State
        University and a Web Developer at heart. A big movie buff, in my spare
        time I like to Netflix and chill and play lots of chess. Hit me up if
        you want to collaborate on a project or wanna play a game of chess or
        two !"
      </div>
      <div className="home-social-icons">
        <a
          href="https://twitter.com/SHUBHAM56861690"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="twitter fa fa-2x fa-twitter-square"></span> Twitter
        </a>
        <a
          href="https://www.facebook.com/shhubham.goyal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="facebook fa fa-2x fa-facebook-square"></span>{" "}
          Facebook
        </a>
        <a
          href="https://github.com/shubhamsoengg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="github fa fa-2x fa-github-square"></span> Github
        </a>
        <a
          href="https://www.linkedin.com/in/shubham93/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="linkedin fa fa-2x fa-linkedin-square"></span>{" "}
          LinkedIn
        </a>
      </div>
    </div>
  );
}
