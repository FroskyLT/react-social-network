import React from "react";
import CardContainer from "../common/CardContainer/CardContainer";
import styles from "./login.module.scss";
import video from "../../assets/videos/Samurai.webm";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = (props) => {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    }

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
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.form__submit}
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
      <video autoPlay className={styles.login__background}>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <CardContainer className={styles.login__form}>
        <h1 className={styles.login__heading}>
          Welcome home{" "}
          <span className={styles.login__heading_colored}>samurai</span>
        </h1>
        <LoginForm loginHandler={props.loginHandler} />
      </CardContainer>
    </div>
  );
};

export default Login;
