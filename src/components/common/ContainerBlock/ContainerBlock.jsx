import React from 'react';
import styles from './container-block.module.scss';

export const ContainerBlock = (props) => {
    return <div className={`${styles.containerBlock}`}>{props.children}</div>
}

export default ContainerBlock;
