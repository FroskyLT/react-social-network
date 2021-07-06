import React from "react";
import styles from "./profile.module.scss";
import ProfilePreview from "./ProfilePreview/ProfilePreview";
import LoaderSpinner from "../../common/LoaderSpinner/LoaderSpinner";
import ProfileMain from "./ProfileMain/ProfileMain";

const Profile = (props) => {
  if (!props.profile) return <LoaderSpinner />;
  return (
    <div className={styles.profile}>
      <div className={styles.preview}>
        <ProfilePreview
          profileData={props.profile}
          currUserId={props.currUserId}
          followInProgress={props.followInProgress}
          onFollow={props.onFollow}
          onUnfollow={props.onUnfollow}
          isFollowingUser={props.isFollowingUser}
          isFollowing={props.isFollowing}
          saveImage={props.saveImage}
        />
      </div>
      <div className={styles.main}>
        <ProfileMain
          profile={props.profile}
          friends={props.friends}
          status={props.status}
          currUserId={props.currUserId}
          updateUserStatus={props.updateUserStatus}
          updateProfile={props.updateProfile}
        />
      </div>
    </div>
  );
};

export default Profile;
