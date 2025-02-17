import React from "react";
import cssClass from "./Button.module.css";

const Button = (props) => (
  <button
    onClick={props.clicked}
    className={[cssClass.Button, cssClass[props.btnType]].join(" ")}>
    {props.children}{" "}
  </button>
);

export default Button;
