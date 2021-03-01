import React from 'react';
import styles from './modal.module.scss';

const Modal = (props) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;
