import React from 'react';
import PostsContainer from '../Posts/PostsContainer';
import styles from './profile-main.module.scss';

const ProfileMain = (props) => {
    return (
        <div className={styles.profileMain}>
            <PostsContainer />
        </div>
    );
}

export default ProfileMain;