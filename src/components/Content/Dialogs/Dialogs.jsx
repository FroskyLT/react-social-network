import React from "react";
import styles from "./dialogs.module.scss";
import People from "./People/People";
import Messages from "./Messages/Messages";
import MessageField from "./MessageField/MessageFIeld";

const Dialogs = (props) => {
  const { peopleData, conversationData, addMessage } = props;

  return (
    <div className={styles.dialogPage}>
      <div className={styles.dialogPage__people}>
        <People peopleData={peopleData} />
      </div>
      <div className={styles.dialogPage__messages}>
        <Messages conversationData={conversationData} />
      </div>
      <div className={styles.dialogPage__field}>
        <MessageField sendMessage={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
