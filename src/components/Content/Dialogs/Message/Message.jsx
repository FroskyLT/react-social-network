import React from 'react';
import d from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={d.message}>
            <div className={d.message__container}>
                <div className={d.message__body}>
                    <div className={d.message__avatar}>
                        <div className={d.message__avatar_photo}><img src={props.imgUrl} alt="" /></div>
                        <div className={d.message__avatar_name}>{props.name}</div>
                    </div>
                    <div className={d.message__text}>{props.text}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;