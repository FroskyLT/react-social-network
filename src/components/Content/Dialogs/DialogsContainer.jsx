import Dialogs from "./Dialogs";
import {
  addMessage,
  updateNewMessageElement,
} from "../../../redux/reducers/messagesReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { addMessage, updateNewMessageElement })
)(Dialogs);

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
