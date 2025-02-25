import React, { Fragment, useEffect } from "react";
import Button from "../../UI/Button/Button";
import cssClass from "./OrderSummary.module.css";

const orderSummary = (props) => {
  const ingredientList = Object.keys(props.ingredients).map((ing) => {
    return (
      <li key={ing}>
        <span style={{ textTransform: "capitalize" }}>{ing}</span>:{" "}
        {props.ingredients[ing]}
      </li>
    );
  });

  useEffect(() => {
    console.log("[OrderSummary] Component");
  }, []);

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>Delicious burger with:</p>
      <ul className={cssClass.ListContainer}>{ingredientList}</ul>
      <h4>
        Price: <code>$ {props.price.toFixed(2)}</code>
      </h4>
      <p>Continue to Checkout ?</p>
      <Button
        btnType="Danger"
        clicked={props.cancel}>
        Cancel
      </Button>
      <Button
        btnType="Success"
        clicked={props.checkout}
        >
        Checkout
      </Button>
    </Fragment>
  );
};

export default orderSummary;
