import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import cssClass from "./Modal.module.css";

const modal = (props) => {

  // useEffect(() => {
  //   if (!props.show || !props.children) {
  //     document.body.style.overflow = "hidden";
  //   }
  // }, [props.show, props.children]);

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
};

export default modal;
