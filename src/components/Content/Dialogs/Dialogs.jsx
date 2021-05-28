import React from "react";
import styles from "./dialogs.module.scss";
import People from "./People/People";
import Messages from "./Messages/Messages";
import { Formik, Form, Field } from "formik";

const MessageForm = (props) => {
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
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Field
            id="message"
            type="message"
            name="message"
            className={styles.form__field}
            required
            autocomplete="off"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.form__submit}
          >
            send
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Dialogs = (props) => {
  const { peopleData, conversationData } = props;

  return (
    <div className={styles.dialogPage}>
      <div className={styles.dialogPage__people}>
        <People peopleData={peopleData} />
      </div>
      <div className={styles.dialogPage__messages}>
        <Messages conversationData={conversationData} />
      </div>
      <div className={styles.dialogPage__field}>field</div>
      {/* <div className={styles.main}>
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
            <MessageForm sendMessage={props.addMessage} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dialogs;
