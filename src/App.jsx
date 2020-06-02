import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "./components/styles.scss";

export default class App extends Component {
  state = {
    categoryItems: [
      { categoryId: "about", name: "About", active: true, link: "/" },
      {
        categoryId: "project",
        name: "Projects",
        active: false,
        link: "/projects",
      },
      { categoryId: "resume", name: "Resume", active: false, link: "/resume" },
      {
        categoryId: "contact",
        name: "Contact",
        active: false,
        link: "/contact",
      },
    ],
  };

  handleCategoryChange = (item) => {
    let categories = this.state.categoryItems;
    let modifiedCategories = categories.map((cat) => {
      if (cat.categoryId === item.categoryId) {
        cat.active = true;
      } else {
        cat.active = false;
      }
      return cat;
    });
    this.setState({ categoryItems: modifiedCategories });
  };

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm-2 category-list-wrapper">
            <CategoryList
              categoryItems={this.state.categoryItems}
              onCategoryChange={this.handleCategoryChange}
            />
          </div>
          <div className="col-sm-10 content-wrapper offset-sm-2">
            <Switch>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/resume" component={Resume}></Route>
              <Route path="/" component={About}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
