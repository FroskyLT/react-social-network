import React from "react";
import styles from "./dialogs.module.scss";
import People from "./People/People";
import Messages from "./Messages/Messages";
import { Formik, Form, Field } from "formik";

const MessageField = (props) => {
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        debugger;
        props.sendMessage(values.message);
        resetForm({});
        setSubmitting(false);
      }}
    >
      {() => (
        <Form className={styles.messageField}>
          <Field
            id="message"
            type="message"
            name="message"
            className={styles.messageField__field}
            required
            autoComplete="off"
            placeholder="type new message..."
          />
        </Form>
      )}
    </Formik>
  );
};

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
