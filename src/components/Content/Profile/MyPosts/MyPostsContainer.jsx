import { connect } from 'react-redux';
import { addPost, updateNewPostElement } from '../../../../redux/profileReducer';
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

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostElement })(MyPosts);

export default MyPostsContainer;