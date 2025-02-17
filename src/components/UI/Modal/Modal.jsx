import React, { Fragment, memo, useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import cssClass from "./Modal.module.css";

const modal = memo((props) => {
  console.log("[Modal] is rendering");

  return (
    <Fragment>
      <div
        className={[
          cssClass.Modal,
          props.show ? cssClass.Show : cssClass.Hide,
        ].join(" ")}>
        {props.children}
      </div>
      <Backdrop
        show={props.show}
        clicked={props.modalClosed}
      />
    </Fragment>
  );
});

export default modal;
