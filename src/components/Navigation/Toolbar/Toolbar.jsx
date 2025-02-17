import React from "react";
import Logo from "../../Logo/Logo";
import DrawerToggle from "./DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssClass from "./Toolbar.module.css";

const toolbar = (props) => (
  <header className={cssClass.Toolbar}>
    <DrawerToggle clicked={props.sideDrawer} />
    <Logo height="80%" />
    <nav className={cssClass.DesktopOnly}>
      <NavigationItems></NavigationItems>
    </nav>
  </header>
);

export default toolbar;
