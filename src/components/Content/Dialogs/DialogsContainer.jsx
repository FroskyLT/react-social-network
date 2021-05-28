import Dialogs from "./Dialogs";
import { addMessage } from "../../../redux/reducers/messagesReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getConversationDataSelector,
  getNewMessageTextSelector,
  getPeopleDataSelector,
} from "../../../selectors/dialogs-selectors";

const mapStateToProps = (state) => {
  return {
    peopleData: getPeopleDataSelector(state),
    conversationData: getConversationDataSelector(state),
    newMessageText: getNewMessageTextSelector(state),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addMessage })
)(Dialogs);

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
