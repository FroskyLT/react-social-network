import { connect } from 'react-redux';
import { addPost, updateNewPostElement } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostElement })(MyPosts);

export default MyPostsContainer;