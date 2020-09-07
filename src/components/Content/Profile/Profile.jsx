import React from 'react';
import p from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {

  return (
    <div className={p.profile}>
      <div className={p.info}>
        <ProfileInfo />
      </div>
      <div className={p.posts}>
        {/* <MyPosts postData={props.profilePage.postData} newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch} /> */}
          <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
      </div>
    </div>
  );
}

export default Profile;