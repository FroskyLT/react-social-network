import Dialogs from "./Dialogs";
import {
  addMessage,
  updateNewMessageElement,
} from "../../../redux/reducers/messagesReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getConversationData,
  getNewMessageText,
  getPeopleData,
} from "../../../selectors/dialogs-selectors";

const mapStateToProps = (state) => {
  return {
    peopleData: getPeopleData(state),
    conversationData: getConversationData(state),
    newMessageText: getNewMessageText(state),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addMessage, updateNewMessageElement })
)(Dialogs);

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
