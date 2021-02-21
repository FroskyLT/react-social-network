import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageElementActionCreator } from '../../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

const mapStateToProps = state => {
    return {
        messagesPage: state.messagesPage,
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


export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));