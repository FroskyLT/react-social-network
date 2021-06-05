import React from "react";
import styles from "./profile-preview.module.scss";
import Button from "../../../common/Button/Button";

const ProfilePreview = (props) => {
  const profileId = props.profileData.userId;
  const isFollowInProgress = props.followInProgress.some(
    (userId) => userId === profileId
  );
  const currUserProfile = props.currUserId === profileId;
  const isFollowed = props.isFollowingUser;

  if (props.currUserId && !currUserProfile) props.isFollowing(profileId);

  const followButton = () => {
    return isFollowed ? (
      <Button
        clickHandler={() => props.onUnfollow(profileId)}
        disabled={isFollowInProgress}
      >
        {"unfollow"}
      </Button>
    ) : (
      <Button
        clickHandler={() => props.onFollow(profileId)}
        disabled={isFollowInProgress}
      >
        {"follow"}
      </Button>
    );
  };

  return (
    <div className={styles.profilePreview}>
      <div className={styles.wallpaper}>
        <img
          src={
            "https://images.hdqwalls.com/wallpapers/red-lake-mountains-minimal-4k-1u.jpg"
          }
          alt=""
        />
      </div>
      <div className={styles.about}>
        <img
          src={
            props.profileData.photos.large ||
            "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"
          }
          alt=""
        />
        <div className={styles.about__description}>
          <div className={styles.about__name}>
            {props.profileData.fullName ?? "No Name"}
          </div>
          {!props.currUserId || currUserProfile ? (
            <div className={styles.about__followPlaceholder} />
          ) : (
            followButton()
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
