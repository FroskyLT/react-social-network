import { connect } from "react-redux";
import {
  addPost,
  updateNewPostElement,
} from "../../../../redux/reducers/profileReducer";
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

export default connect(mapStateToProps, { addPost, updateNewPostElement })(
  Posts
);
