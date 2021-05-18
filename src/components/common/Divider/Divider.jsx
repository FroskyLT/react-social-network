import React from "react";
import styles from "./divider.module.scss";

const Divider = (props) => (
  <div className={props.noMargin ? styles.divider_noMargin : styles.divider} />
);

export default Divider;
