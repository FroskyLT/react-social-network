import React from 'react';
import styles from './modal.module.scss';

const Modal = (props) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modal__header}>{props.title}</div>
                {/* <Divider /> */}
                <div className={styles.modal__content}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
