import React, { useRef } from "react";
import Divider from "../Divider/Divider";
import Icon from "../Icon/Icon";
import styles from "./dialog.module.scss";

const Dialog = (props) => {
  const dialogRef = useRef();

  const closeDialog = (e) => {
    if (dialogRef.current === e.target) {
      props.closeDialog();
    }
  };
  return (
    <>
      {props.showDialog ? (
        <div
          className={styles.dialogOverlay}
          tabIndex={-1}
          ref={dialogRef}
          onClick={closeDialog}
        >
          <div className={styles.dialog}>
            <div className={styles.dialog__header}>
              <div className={styles.dialog__headerTitle}>{props.title}</div>
              <button
                className={styles.dialog__closeIcon}
                onClick={props.closeDialog}
              >
                <Icon name="close" />
              </button>
            </div>
            <Divider />
            {props.children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Dialog;
