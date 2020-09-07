import React from 'react';
import { addPostActionCreator, updateNewPostElementActionCreator } from '../../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let NewPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = (text) => {
    props.dispatch(updateNewPostElementActionCreator(text));
  }

  return <MyPosts addPost={NewPost} updateNewPostElement={onPostChange} profilePage={props.profilePage} />
}

export default MyPostsContainer;