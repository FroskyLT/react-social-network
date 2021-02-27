import React from 'react';
import styles from './profile.module.scss';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfilePreview from './ProfilePreview/ProfilePreview';
import LoaderSpinner from '../../common/LoaderSpinner/LoaderSpinner';

const Profile = (props) => {

    if (!props.profile) return <LoaderSpinner />
    return (
        <div className={styles.profile}>
            <div className={styles.preview}>
                <ProfilePreview profileData={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            </div>
            <div className={styles.main}>
                <div className={styles.info}>
                    <ProfileInfo profileData={props.profile} />
                </div>
                <div className={styles.posts}>
                    <MyPostsContainer profileData={props.profile} />
                </div>
            </div>
        </div>
    );
}

export default Profile;