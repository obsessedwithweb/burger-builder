import React from "react";
import cssClasses from "./BuildControl.module.css";

const buildControl = (props) => (
  <div className={cssClasses.BuildControl}>
    <div className={cssClasses.Label}> {props.label} </div>
    <button
      className={cssClasses.Less}
      disabled={props.disable}
      onClick={props.removed}>
      Less
    </button>
    <button
      onClick={props.added}
      className={cssClasses.More}>
      More
    </button>
  </div>
);

export default buildControl;
