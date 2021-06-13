import React from "react";
import styles from "./card-container.module.scss";

export const CardContainer = (props) => {
  return (
    <div
      className={
        props.className
          ? `${styles.containerBlock} ${props.className}`
          : styles.containerBlock
      }
    >
      {props.children}
    </div>
  );
};

export default CardContainer;
