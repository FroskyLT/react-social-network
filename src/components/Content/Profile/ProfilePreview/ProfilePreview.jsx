import React from "react";
import styles from "./profile-preview.module.scss";
import Button from "../../../common/Button/Button";

const ProfilePreview = (props) => {
  const {
    profileData,
    currUserId,
    followInProgress,
    onFollow,
    onUnfollow,
    isFollowingUser,
    isFollowing,
  } = props;

  const profileId = profileData.userId;
  const isFollowInProgress = followInProgress.some(
    (userId) => userId === profileId
  );
  const currUserProfile = currUserId === profileId;
  const isFollowed = isFollowingUser;

  if (currUserId && !currUserProfile) isFollowing(profileId);

  const followButton = () => {
    return isFollowed ? (
      <Button
        clickHandler={() => onUnfollow(profileId)}
        disabled={isFollowInProgress}
      >
        {"unfollow"}
      </Button>
    ) : (
      <Button
        clickHandler={() => onFollow(profileId)}
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
            profileData.photos.large ||
            "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"
          }
          alt=""
        />
        <div className={styles.about__description}>
          <div className={styles.about__name}>
            {profileData.fullName ?? "No Name"}
          </div>
          {!currUserId || currUserProfile ? (
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
