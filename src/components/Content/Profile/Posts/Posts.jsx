import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./posts.module.scss";
import Modal from "../../../common/Modal/Modal";
import Post from "./Post/Post";

export const PostTextfield = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className={styles.postTextField}>
      <Link to="/profile" className={styles.postTextfield__link}>
        <img
          className={styles.postTextField__image}
          src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"
          alt="profile"
        />
      </Link>
      <button onClick={toggleModal} className={styles.postTextField__button}>
        {"What's on your mind?"}
      </button>
      <Modal showModal={showModal} closeModal={toggleModal} title="Create Post">
        <textarea
          placeholder="What's on your mind?"
          className={styles.postTextField__textfield}
        ></textarea>
      </Modal>
    </div>
  );
};

const Posts = (props) => {
  const currUserProfile = props.currUserId === props.profile.userId;

  const postElements = props.postData
    .slice(0)
    .reverse()
    .map((post) => <Post post={post} profile={props.profile} key={post.id} />);

  // const NewPost = () => {
  //     props.addPost();
  // }S
  // const onPostChange = (e) => {
  //     const text = e.target.value;
  //     props.updateNewPostElement(text);
  // }

  return (
    <div className={styles.posts}>
      {currUserProfile && <PostTextfield />}
      <div className={styles.posts__content}>{postElements}</div>
    </div>
  );
};

export default Posts;
