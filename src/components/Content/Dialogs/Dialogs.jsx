import React from "react";
import styles from "./dialogs.module.scss";
import People from "./People/People";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const peopleElements = props.peopleData.map((d) => (
    <People id={d.id} name={d.name} imgUrl={d.imgUrl} key={d.id} />
  ));
  const conversationElements = props.conversationData.map((c) =>
    c.id ? (
      <div className={styles.right} key={c.key}>
        <Message name={c.name} text={c.text} imgUrl={c.imgUrl} />
      </div>
    ) : (
      <Message key={c.key} name={c.name} text={c.text} imgUrl={c.imgUrl} />
    )
  );
  const newMessage = () => {
    props.addMessage();
  };
  const onMessageChange = (e) => {
    const text = e.target.value;
    props.updateNewMessageElement(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.main}>
        <div className={styles.people}>
          <div className={styles.people__container}>
            <div className={styles.people__body}>
              <ul>{peopleElements}</ul>
            </div>
          </div>
        </div>
        <div className={styles.conversation}>
          <div className={styles.message__wrapper}>{conversationElements}</div>
          <div className={styles.textarea}>
            <div className={styles.textarea__container}>
              <div className={styles.textarea__body}>
                <textarea
                  value={props.newMessageText}
                  onChange={onMessageChange}
                />
                <button onClick={newMessage}>send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
