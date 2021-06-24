import { connect } from "react-redux";
// import { addPost } from "../../../../redux/reducers/profileReducer";
import {
  getPostDataSelector,
  getProfileSelector,
  getUserIdSelector,
  getCurrUserPhotosSelector,
  getIsLoggedSelector,
} from "../../../../selectors/posts-selectors";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    postData: getPostDataSelector(state),
    profile: getProfileSelector(state),
    currUserId: getUserIdSelector(state),
    isLogged: getIsLoggedSelector(state),
    userPhotos: getCurrUserPhotosSelector(state),
  };
};

export default connect(mapStateToProps, {})(Posts);
