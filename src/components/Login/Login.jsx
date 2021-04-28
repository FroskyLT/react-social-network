import React from 'react';
import CardContainer from '../common/CardContainer/CardContainer';
import styles from './login.module.scss';
import video from '../../assets/videos/Samurai.webm';

const Login = (props) => {
    return (
        <div className={styles.login}>
            <video autoPlay className={styles.login__background}>
                <source src={video} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <CardContainer className={styles.login__form}>
                <h1>Welcome!</h1>
                <div className={styles.form__group}>
                    <input id="login" className={styles.form__field} type="text" placeholder="login" />
                    <label for="login" className={styles.form__label}>login</label>
                </div>
                <div className={styles.form__group}>
                    <input id="password" className={styles.form__field} type="password" placeholder="password" />
                    <label for="password" className={styles.form__label}>password</label>
                </div>
                <button onClick={props.loginHandler}>sign in</button>
            </CardContainer>
        </div>
    );
}

export default Login;
