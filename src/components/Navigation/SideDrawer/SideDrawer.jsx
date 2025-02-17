import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import cssClass from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  //...
  return (
    <Fragment>
      <Backdrop
        show={props.open}
        clicked={props.closed}
      />
      <div
        className={[
          cssClass.SideDrawer,
          props.open ? cssClass.Open : cssClass.Close,
        ].join(" ")}>
        <div className={cssClass.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sideDrawer;
