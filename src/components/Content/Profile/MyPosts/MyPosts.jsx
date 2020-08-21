import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.postData.map( d  => <Post text={d.name} likesCount={d.likesCount} imgUrl={d.imgUrl}/>);

  return (
    <div className={p.myPosts}>
      <div className={p.textarea}>
        <textarea name="" id="" cols="50" rows="4"></textarea>
      </div>
      <div className={p.button}>
        <button>add</button>
      </div>
      <div className={p.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;