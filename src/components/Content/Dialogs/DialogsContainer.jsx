import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageElementActionCreator } from '../../../redux/messagesReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        messagesPage: state.messagesPage,
        isLogged: state.auth.isLogged
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageElement: text => {
            dispatch(updateNewMessageElementActionCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;