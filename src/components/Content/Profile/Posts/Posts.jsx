import React from 'react';
import { Link } from 'react-router-dom';
import styles from './posts.module.scss';
import Modal from '../../../common/Modal/Modal';

export const PostTextfield = () => {
    return (
        <div className={styles.postTextField}>
            <Link to="./profile" className={styles.postTextfield__link}>
                <img className={styles.postTextField__image} src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png" alt="profile" />
            </Link>
            <button className={styles.postTextField__button}>{"What's on your mind?"}</button>
            {/* <input type="text" placeholder="What's on your mind?" /> */}
        </div>
    );
}

const Posts = (props) => {

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
            <Modal>Test</Modal>
        </div>
    );
}

export default Posts;