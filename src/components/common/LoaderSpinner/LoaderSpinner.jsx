import React from "react";
import styles from "./loader-spinner.module.scss";

export const LoaderSpinner = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.loader} />
  </div>
);

export default LoaderSpinner;
