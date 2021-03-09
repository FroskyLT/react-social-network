import React from 'react';
import styles from './button.module.scss';

export const Button = (props) => {
    return <button
        className={props.disabled
            ? `${styles.button} ${styles.button__disabled} ${props.styleName}`
            : `${styles.button} ${props.styleName}`}
        onClick={props.clickHandler}
        disabled={props.disabled}
    >{props.children}</button>
}

export default Button;
