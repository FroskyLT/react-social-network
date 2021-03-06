import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './posts.module.scss';
import Modal from '../../../common/Modal/Modal';

export const PostTextfield = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prev => !prev);
    }
    return (
        <div className={styles.postTextField}>
            <Link to="/profile" className={styles.postTextfield__link}>
                <img className={styles.postTextField__image} src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png" alt="profile" />
            </Link>
            <button onClick={toggleModal} className={styles.postTextField__button}>{"What's on your mind?"}</button>
            <Modal showModal={showModal} closeModal={toggleModal} title="Create Post">
                <textarea placeholder="What's on your mind?" className={styles.postTextField__textfield}></textarea>
            </Modal>
        </div>
    );
}

const Posts = (props) => {
    //show modal

    // const postElements = props.profilePage.postData.map(d => <Post text={d.content} likesCount={d.likesCount} imgUrl={props.profileData?.photos?.large || d.imgUrl} key={d.id} />);

    // const NewPost = () => {
    //     props.addPost();
    // }
    // const onPostChange = (e) => {
    //     const text = e.target.value;
    //     props.updateNewPostElement(text);
    // }

    return (
        <div className={styles.posts}>
            <PostTextfield />
        </div>
    );
}

export default Posts;