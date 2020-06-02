import React from "react";

export default function Contact() {
  return (
    <div className="contact-wrapper col-sm-8 offset-sm-2">
      <h3 className="text-center contact-heading">Contact Me </h3>
      <p className="contact-tagline text-center">
        Hit me up if you wanna collaborate on a project or just wanna chat!
      </p>
      <form className="contact-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="fullname"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            name="comment"
            className="form-control"
            id="comment"
            cols="10"
            rows="5"
            placeholder="Comment"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="contact-submit">
            <span className="fa fa-paper-plane"></span> Send
          </button>
        </div>
      </form>
      <div className="social-icons">
        <a
          href="https://twitter.com/SHUBHAM56861690"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="twitter fa fa-twitter-square"></span>
        </a>
        <a
          href="https://www.facebook.com/shhubham.goyal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="facebook fa fa-facebook-square"></span>
        </a>
        <a
          href="https://github.com/shubhamsoengg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="github fa fa-github-square"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/shubham93/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="linkedin fa fa-linkedin-square"></span>
        </a>
      </div>
    </div>
  );
}
