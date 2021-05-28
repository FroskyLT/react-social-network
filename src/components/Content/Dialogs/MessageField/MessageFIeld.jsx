import React from "react";
import styles from "./message-field.module.scss";
import { Formik, Form, Field } from "formik";

const MessageField = ({ sendMessage }) => {
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        debugger;
        sendMessage(values.message);
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

export default MessageField;
