import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageElementActionCreator } from '../../../redux/messagesReducer';

const DialogsContainer = (props) => {
    let newMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        props.dispatch(updateNewMessageElementActionCreator(text));
    }

    return <Dialogs addMessage={newMessage} updateNewMessageElement={onMessageChange} messagesPage={props.messagesPage} />
}

export default DialogsContainer;