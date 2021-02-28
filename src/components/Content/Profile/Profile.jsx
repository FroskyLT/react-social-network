import React from 'react';
import styles from './profile.module.scss';
import ProfilePreview from './ProfilePreview/ProfilePreview';
import LoaderSpinner from '../../common/LoaderSpinner/LoaderSpinner';
import ProfileMain from './ProfileMain/ProfileMain';

const Profile = (props) => {

    if (!props.profile) return <LoaderSpinner />
    return (
        <div className={styles.profile}>
            <div className={styles.preview}>
                <ProfilePreview profileData={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            </div>
            <div className={styles.main}>
                <ProfileMain />
            </div>
        </div>
    );
}

export default Profile;