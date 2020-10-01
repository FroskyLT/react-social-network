import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {

  return (
    <div className={p.profile}>
      <div className={p.info}>
        <ProfileInfo />
      </div>
      <div className={p.posts}>
          <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;