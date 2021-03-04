import React, { useRef } from 'react';
import Divider from '../Divider/Divider';
import Icon from '../Icon/Icon';
import styles from './modal.module.scss';

const Modal = (props) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.closeModal();
        }
    }
    return (
        <>
            { props.showModal ?
                <div className={styles.modalOverlay} tabIndex={-1} ref={modalRef} onClick={closeModal}>
                    <div className={styles.modal}>
                        <div className={styles.modal__header}>
                            <div className={styles.modal__headerTitle}>{props.title}</div>
                            <button className={styles.modal__closeIcon} onClick={props.closeModal}>
                                <Icon name="close" />
                            </button>
                        </div>
                        <Divider />
                        {props.children}
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default Modal;
