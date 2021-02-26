import React from 'react';
import ContainerBlock from '../common/ContainerBlock/ContainerBlock';
import styles from './login.module.css';

const Login = (props) => {
    return (
        <div className={styles.login}>
            <div className={styles.login__form}>
                <ContainerBlock>
                    <h1>login</h1>
                    <button onClick={props.loginHandler}>sign in</button>
                </ContainerBlock>
            </div>
        </div>
    );
}

export default Login;
