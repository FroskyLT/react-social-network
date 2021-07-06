import React from "react";
import CardContainer from "../common/CardContainer/CardContainer";
import styles from "./login.module.scss";
import video from "../../assets/videos/Samurai.webm";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { email, required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  const validate = (values) => {
    const errors = {};

    if (required(values.email) || email(values.email))
      errors.email = required(values.email) || email(values.email);
    if (required(values.password)) errors.password = required(values.password);

    return errors;
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        props.loginHandler(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className={styles.form}>
          <div className={styles.form__group}>
            <Field
              id="email"
              type="email"
              name="email"
              className={styles.form__field}
              required
            />
            <label
              htmlFor="email"
              className={
                values.email
                  ? styles.form__label
                  : `${styles.form__label} ${styles.form__label_big}`
              }
            >
              email
            </label>
            <div className={styles.form__error}>
              <ErrorMessage
                name="email"
                component="div"
                className={styles.form__error}
              />
            </div>
          </div>
          <div className={styles.form__group}>
            <Field
              id="password"
              type="password"
              name="password"
              className={styles.form__field}
              required
            />
            <label
              htmlFor="password"
              className={
                values.password
                  ? styles.form__label
                  : `${styles.form__label} ${styles.form__label_big}`
              }
            >
              password
            </label>
            <div className={styles.form__error}>
              <ErrorMessage
                name="password"
                component="div"
                className={styles.form__error}
              />
            </div>
          </div>
          <div className={styles.form__error}>{props.error && props.error}</div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={
              !isSubmitting
                ? styles.form__submit
                : `${styles.form__submit} ${styles.form__submit_disabled}`
            }
          >
            sign in
          </button>
        </Form>
      )}
    </Formik>
  );
};

const Login = (props) => {
  return (
    <div className={styles.login}>
      <video autoPlay muted loop className={styles.login__background}>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <CardContainer className={styles.login__form}>
        <h1 className={styles.login__heading}>
          Welcome home{" "}
          <span className={styles.login__heading_colored}>samurai</span>
        </h1>
        <LoginForm loginHandler={props.loginHandler} error={props.error} />
      </CardContainer>
    </div>
  );
};

export default Login;
