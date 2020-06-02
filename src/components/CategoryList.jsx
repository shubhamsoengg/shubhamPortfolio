import React from "react";
import { Link } from "react-router-dom";
import nav_profile_pic from "../assets/profile_2.jpg";
import "./styles.scss";
export default function CategoryList(props) {
  return (
    <React.Fragment>
      <div className="nav-profile-pic">
        <img src={nav_profile_pic} alt="nav_profile_pic " />
      </div>
      <ul className="category-list">
        {props.categoryItems.map((item) => (
          <li
            key={item.categoryId}
            className={item.active ? "item active" : "item"}
            onClick={() => props.onCategoryChange(item)}
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
