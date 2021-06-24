import React from "react";
import Pagination from "../../common/Pagination/Pagination";
import SingleUser from "./SingleUser/SingleUser";
import styles from "./users.module.scss";

export const Users = (props) => {
  const {
    users,
    totalUsersCount,
    pageSize,
    onFollow,
    onUnfollow,
    currentPage,
    onPageChanged,
    followInProgress,
  } = props;

  const singleUser = users.map((user) => (
    <SingleUser
      key={user.id}
      id={user.id}
      imgUrl={user.photos.large}
      name={user.name}
      status={user.status}
      country={user.country}
      city={user.city}
      isFollowed={user.followed}
      onFollow={onFollow}
      onUnfollow={onUnfollow}
      isFollowInProgress={followInProgress.some((userId) => userId === user.id)}
    />
  ));

  return (
    <div className={styles.users}>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        pageChangeHandler={onPageChanged}
      />
      <div className={styles.users__container}>{singleUser}</div>
    </div>
  );
};

export default Users;
