import React from 'react';
import styles from './post.module.scss';
import myuser from '../../../../../assets/images/myuser.png';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.postContainer}>
                <div className={styles.postBody}>
                    <div className={styles.postImage}><img src={props.imgUrl || myuser} alt="" /></div>
                    <div className={styles.postText}>{props.text}</div>
                    <div className={styles.postLikes}>{props.likesCount} Like </div>
                </div>
            </div>


        </div>
    );
}

export default Post;