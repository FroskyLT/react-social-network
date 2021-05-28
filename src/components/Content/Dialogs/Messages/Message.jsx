import React from "react";
import styles from "./messages.module.scss";

const Message = (props) => {
  const { name, text, imgUrl, friend } = props;

  return (
    <div
      className={
        friend ? `${styles.message} ${styles.message__friend}` : styles.message
      }
    >
      <div className={styles.message__user}>
        <img className={styles.message__userPhoto} src={imgUrl} alt="" />
        <div className={styles.message__userName}>{name}</div>
      </div>
      <div className={styles.message__text}>{text}</div>
    </div>
  );
};

export default Message;
