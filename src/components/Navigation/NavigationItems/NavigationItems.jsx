import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import cssClass from "./NavigationItems.module.css";

const navigationItems = (props) => (
  <ul className={cssClass.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
