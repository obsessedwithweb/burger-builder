import React from "react";
import logoPath from "../../assets/Images/burger-logo.png";
import cssClass from "./Logo.module.css";

const logo = (props) => (
  <div
    className={cssClass.Logo}
    style={{ height: props.height }}>
    <img
      src={logoPath}
      alt="Logo"
    />
  </div>
);

export default logo;
