import React from 'react';
import ContainerBlock from '../common/ContainerBlock/ContainerBlock';
import styles from './login.module.css';

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.login__form}>
                <ContainerBlock>
                    <h1>login</h1>
                </ContainerBlock>
            </div>
        </div>
    );
}

export default Login;
