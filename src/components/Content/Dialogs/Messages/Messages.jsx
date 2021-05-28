import React from "react";
import styles from "./messages.module.scss";
import Message from "./Message";

const Messages = ({ conversationData }) => {
  const conversationElements = conversationData.map((message) => (
    <Message
      key={message.key}
      name={message.name}
      text={message.text}
      imgUrl={message.imgUrl}
      friend={!message.id}
    />
  ));
  return <div className={styles.messages}>{conversationElements}</div>;
};

export default Messages;
