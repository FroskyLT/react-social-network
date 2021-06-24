import React from "react";
import styles from "../users.module.scss";
import { NavLink } from "react-router-dom";
import userPlaceholder from "../../../../assets/images/person.png";
import Button from "../../../common/Button/Button";

const SingleUser = (props) => {
  const followButton = () => (
    <Button
      styleName={
        props.isFollowInProgress
          ? `${styles.follow__button} ${styles.follow__button_disabled}`
          : styles.follow__button
      }
      disabled={props.isFollowInProgress}
      clickHandler={
        props.isFollowed
          ? () => props.onUnfollow(props.id)
          : () => props.onFollow(props.id)
      }
    >
      {props.isFollowed ? "unfollow" : "follow"}
    </Button>
  );

  return (
    <div className={styles.singleUser}>
      <div className={styles.singleUser__avatar}>
        <NavLink to={`/profile/${props.id}`}>
          <img
            className={styles.singleUser__avatarImage}
            src={props.imgUrl || userPlaceholder}
            alt=""
          />
        </NavLink>
      </div>
      <div className={styles.singleUser__title}>{props.name}</div>
      <div
        className={
          props.status
            ? styles.singleUser__description
            : styles.singleUser__description_none
        }
      >
        {props.status && props.status}
      </div>
      <div className={styles.singleUser__follow}>{followButton()}</div>
    </div>
  );
};

export default SingleUser;
