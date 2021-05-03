import React from 'react';
import CardContainer from '../common/CardContainer/CardContainer';
import styles from './login.module.scss';
import video from '../../assets/videos/Samurai.webm';
import { Formik, Form, Field, ErrorMessage } from 'formik'; 

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.loginHandler(values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, values }) => (
                <Form>
                    <div className={styles.form__group}>
                        <Field id="email" type="email" name="email" className={styles.form__field} required />
                        <label htmlFor="email" className={ values.email ? styles.form__label : `${styles.form__label} ${styles.form__label_big}`}>email</label>
                        {/* <ErrorMessage name="email" component="div" /> */}
                    </div>
                    <div className={styles.form__group}>
                        <Field id="password" type="password" name="password" className={styles.form__field} required />
                        <label htmlFor="password" className={ values.password ? styles.form__label : `${styles.form__label} ${styles.form__label_big}`}>password</label>
                        {/* <ErrorMessage name="password" component="div" /> */}
                    </div>
                    <button type="submit" disabled={isSubmitting} className={styles.form__submit}>sign in</button>
                </Form>
            )}
        </Formik>
    );
}

const Login = (props) => {
    return (
        <div className={styles.login}>
            <video autoPlay className={styles.login__background}>
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <CardContainer className={styles.login__form}>
                <h1 className={styles.login__heading}>Welcome home <span className={styles.login__heading_colored}>samurai</span></h1>
                {/* <div className={styles.form__group}>
                    <input id="login" className={styles.form__field} type="text" placeholder="login" />
                    <label htmlFor="login" className={styles.form__label}>login</label>
                </div>
                <div className={styles.form__group}>
                    <input id="password" className={styles.form__field} type="password" placeholder="password" />
                    <label htmlFor="password" className={styles.form__label}>password</label>
                </div>
                <button className={styles.form__submit} onClick={props.loginHandler}>sign in</button> */}
                <LoginForm loginHandler={props.loginHandler} />
            </CardContainer>
        </div>
    );
}

export default Login;
