import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postElements = props.postData.map( d  => <Post text={d.content} likesCount={d.likesCount} imgUrl={d.imgUrl}/>);

  let newPostElement = React.createRef();
  let NewPost = () => {
    let action = {type:'ADD-NEW-POST'}
    props.dispatch(action);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type:'UPDATE-NEW-POST-ELEMENT', newText: text}
    props.dispatch(action);
  }

  return (
    <div className={p.myPosts}>
      <div className={p.textarea}>
        <textarea name="" id="" cols="50" rows="4" ref = {newPostElement} value = {props.newPostText} onChange = {onPostChange}/>
      </div>
      <div className={p.button}>
        <button onClick = { NewPost }>add</button>
      </div>
      <div className={p.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;