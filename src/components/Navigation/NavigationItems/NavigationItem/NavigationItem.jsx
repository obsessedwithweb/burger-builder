import React from "react";
import cssClass from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={cssClass.NavigationItem}>
    <a
      href={props.link}
      className={props.active ? cssClass.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
