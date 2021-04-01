import React from 'react';
import CardContainer from '../common/CardContainer/CardContainer';
import styles from './login.module.scss';
import video from '../../assets/videos/Samurai.mp4';

const Login = (props) => {
    return (
        <div className={styles.login}>
            <video autoPlay className={styles.login__background}>
                <source src={video} type="video/mp4" />
                <source src={video} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
                <CardContainer className={styles.login__form}>
                    <h1>login</h1>
                    <button onClick={props.loginHandler}>sign in</button>
                </CardContainer>
        </div>
    );
}

export default Login;
