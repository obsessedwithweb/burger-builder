import React, { Fragment, useState } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const layout = (props) => {
  const [isClosed, setIsClosed] = useState(false);

  const closeHandler = () => {
    setIsClosed((prevState) => false);
  };

  const sideDrawerToggle = () => setIsClosed((prevState) => !prevState);

  return (
    <Fragment>
      <SideDrawer
        open={isClosed}
        closed={closeHandler}
      />
      <Toolbar sideDrawer={sideDrawerToggle} />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default layout;
