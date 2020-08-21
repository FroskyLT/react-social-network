import React from 'react';
import p from './Post.module.css';
const Post = (props) => {
  return (
    <div className = {p.post}>
      <div className = {p.postContainer}>
        <div className = {p.postBody}>
          <div className = {p.postImage}><img src={props.imgUrl} alt=""/></div>
          <div className = {p.postText}>{props.text}</div>
          <div className = {p.postLikes}>{props.likesCount} Like </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default Post;