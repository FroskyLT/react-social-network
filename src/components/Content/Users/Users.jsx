import React from "react";
import Pagination from "../../common/Pagination/Pagination";
import SingleUser from "./SingleUser/SingleUser";
import styles from "./users.module.scss";

export const Users = (props) => {
  const singleUser = props.users.map((user) => (
    <SingleUser
      key={user.id}
      id={user.id}
      imgUrl={user.photos.small}
      name={user.name}
      status={user.status}
      country={user.country}
      city={user.city}
      isFollowed={user.followed}
      onFollow={props.onFollow}
      onUnfollow={props.onUnfollow}
      isFollowInProgress={props.followInProgress.some(
        (userId) => userId === user.id
      )}
    />
  ));

  return (
    <div className={styles.users}>
      <Pagination
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        pageChangeHandler={props.onPageChanged}
      />
      <div className={styles.users__container}>{singleUser}</div>
    </div>
  );
};

export default Users;
