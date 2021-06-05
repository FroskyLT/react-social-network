import { connect } from "react-redux";
// import { addPost } from "../../../../redux/reducers/profileReducer";
import {
  getPostDataSelector,
  getProfileSelector,
  getUserIdSelector,
} from "../../../../selectors/posts-selectors";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    postData: getPostDataSelector(state),
    profile: getProfileSelector(state),
    currUserId: getUserIdSelector(state),
  };
};

export default connect(mapStateToProps, {})(Posts);
