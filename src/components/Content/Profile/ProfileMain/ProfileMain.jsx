import React from "react";
import PostsContainer from "../Posts/PostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import styles from "./profile-main.module.scss";

const ProfileMain = (props) => {
  return (
    <div className={styles.profileMain}>
      <div className={styles.profileMain__info}>
        <ProfileInfo {...props} />
      </div>
      <div className={styles.profileMain__posts}>
        <PostsContainer />
      </div>
    </div>
  );
};

export default ProfileMain;
