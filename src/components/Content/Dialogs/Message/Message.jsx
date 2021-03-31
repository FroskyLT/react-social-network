import React from 'react';
import styles from './../dialogs.module.scss';

const Message = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.message__container}>
                <div className={styles.message__body}>
                    <div className={styles.message__avatar}>
                        <div className={styles.message__avatar_photo}><img src={props.imgUrl} alt="" /></div>
                        <div className={styles.message__avatar_name}>{props.name}</div>
                    </div>
                    <div className={styles.message__text}>{props.text}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;