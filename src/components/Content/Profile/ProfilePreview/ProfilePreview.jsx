import React from "react";
import styles from "./profile-preview.module.scss";
import Button from "../../../common/Button/Button";
import wallpaper from "../../../../assets/images/wallpaper.jpg";
import userPlaceholder from "../../../../assets/images/person.png";
import { FaImage } from "react-icons/fa";

const ProfilePreview = (props) => {
  const {
    profileData,
    currUserId,
    followInProgress,
    onFollow,
    onUnfollow,
    isFollowingUser,
    isFollowing,
    saveImage,
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

  const onImageChange = (event) => {
    if (event.target.files.length) {
      saveImage(event.target.files[0]);
    }
  };

  return (
    <div className={styles.profilePreview}>
      <div className={styles.wallpaper}>
        <img src={wallpaper} alt="" />
      </div>
      <div className={styles.about}>
        <div className={styles.about__image}>
          <img src={profileData.photos.large || userPlaceholder} alt="" />
          {currUserProfile && (
            <div className={styles.about__loadImage}>
              <input
                type="file"
                id="file"
                accept="image/*"
                className={styles.about__file}
                onChange={onImageChange}
              />
              <label htmlFor="file" className={styles.about__fileLabel}>
                <FaImage />
                {"Choose a photo"}
              </label>
            </div>
          )}
        </div>
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
