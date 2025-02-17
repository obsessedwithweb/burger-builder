import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import cssClasses from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const buildControls = (props) => (
  <div className={cssClasses.BuildControls}>
    <p className={cssClasses.Price}>
      Current Price: $ {props.price.toFixed(2)}
    </p>
    {controls.map((el) => (
      <BuildControl
        label={el.label}
        key={el.label}
        added={() => props.ingredientAdded(el.type)}
        removed={() => props.ingredientRemoved(el.type)}
        disable={props.disabled[el.type]}
      />
    ))}
    <button
      className={cssClasses.OrderButton}
      onClick={props.ordered}
      disabled={props.canOrder}>
      Order Your Meal
    </button>
  </div>
);

export default buildControls;
