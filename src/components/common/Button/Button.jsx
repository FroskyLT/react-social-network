import React from 'react';
import styles from './button.module.scss';

export const Button = (props) => {
    return <button className={`${styles.button} ${props.styleName}`} onClick={props.clickHandler}>{props.children}</button>
}

export default Button;
