import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostElementActionCreator } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {
//   let NewPost = () => { props.dispatch(addPostActionCreator()); }
//   let onPostChange = (text) => { props.dispatch(updateNewPostElementActionCreator(text)); }
//   return <MyPosts addPost={NewPost} updateNewPostElement={onPostChange} profilePage={props.profilePage} />
// }

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostElement: text => {
      dispatch(updateNewPostElementActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;