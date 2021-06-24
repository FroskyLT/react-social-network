import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./posts.module.scss";
import Modal from "../../../common/Modal/Modal";
import Post from "./Post/Post";
import userPlaceholder from "../../../../assets/images/person.png";

export const PostTextfield = ({ userPhotos }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const userImage = userPhotos?.large || userPlaceholder;
  return (
    <div className={styles.postTextField}>
      <Link to="/profile">
        <img className={styles.postTextField__image} src={userImage} alt="" />
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
    .map((post) => (
      <Post
        post={post}
        profile={props.profile}
        userPhotos={props.userPhotos}
        isLogged={props.isLogged}
        key={post.id}
      />
    ));

  // const NewPost = () => {
  //     props.addPost();
  // }

  return (
    <div className={styles.posts}>
      {currUserProfile && <PostTextfield userPhotos={props.userPhotos} />}
      <div className={styles.posts__content}>{postElements}</div>
    </div>
  );
};

export default Posts;
