import React from 'react';
import d from './Dialogs.module.css';
import People from './People/People';
import Message from './Message/Message';
import {addMessageActionCreator, updateNewMessageElementActionCreator} from './../../../redux/state';

const Dialogs = (props) => {
    let peopleElements = props.messagesPage.peopleData.map(d => <People id={d.id} name={d.name} imgUrl={d.imgUrl} />);
    let conversationElements = props.messagesPage.conversationData.map(c => c.id ?
        <div className={d.right}><Message name={c.name} text={c.text} imgUrl={c.imgUrl} /></div> :
        <Message name={c.name} text={c.text} imgUrl={c.imgUrl} />
    );

    let newMessageElement = React.createRef();
    let newMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageElementActionCreator(text));
    }

    return (
        <div className={d.dialogs}>
            <h1>DIALOGS</h1>
            <div className={d.main}>
                <div className={d.people}>
                    <div className={d.people__container}>
                        <div className={d.people__body}>
                            <ul>
                                {peopleElements}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={d.conversation}>
                    <div className={d.conversation__container}>
                        <div className={d.conversation__body}>
                            <div className={d.message__wrapper}>{conversationElements}</div>
                            <div className={d.textarea}>
                                <div className={d.textarea__container}>
                                    <div className={d.textarea__body}>
                                        <textarea name="" id="" ref={newMessageElement} value={props.messagesPage.newMessageText} onChange={onMessageChange} />
                                        <button onClick={newMessage}>send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;