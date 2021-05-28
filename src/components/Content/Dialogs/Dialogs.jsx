import React from "react";
import styles from "./dialogs.module.scss";
import People from "./People/People";
import Message from "./Message/Message";
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
            <MessageForm sendMessage={props.addMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
