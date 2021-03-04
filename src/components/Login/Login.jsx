import React from 'react';
import CardContainer from '../common/CardContainer/CardContainer';
import styles from './login.module.css';

const Login = (props) => {
    return (
        <div className={styles.login}>
            <div className={styles.login__form}>
                <CardContainer>
                    <h1>login</h1>
                    <button onClick={props.loginHandler}>sign in</button>
                </CardContainer>
            </div>
        </div>
    );
}

export default Login;
