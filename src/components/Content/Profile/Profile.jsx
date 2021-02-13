import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfilePreview from './ProfilePreview/ProfilePreview';
import LoaderSpinner from '../../common/LoaderSpinner/LoaderSpinner';

const Profile = (props) => {
    if (!props.profile) return <LoaderSpinner />

    return (
        <div className={p.profile}>
            <div className={p.preview}>
                <ProfilePreview profileData={props.profile} />
            </div>
            <div className={p.main}>
                <div className={p.info}>
                    <ProfileInfo profileData={props.profile} />
                </div>
                <div className={p.posts}>
                    <MyPostsContainer profileData={props.profile} />
                </div>
            </div>
        </div>
    );
}

export default Profile;