import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageElementActionCreator } from '../../../redux/messagesReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));