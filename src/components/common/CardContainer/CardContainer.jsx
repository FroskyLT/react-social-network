import React from 'react';
import styles from './card-container.module.scss';

export const CardContainer = (props) => {
    return <div className={`${styles.containerBlock} ${props.className}`}>{props.children}</div>
}

export default CardContainer;
