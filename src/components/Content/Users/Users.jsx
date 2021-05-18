import React from "react";
import LoaderSpinner from "../../common/LoaderSpinner/LoaderSpinner";
import SingleUser from "./SingleUser/SingleUser";
import styles from "./users.module.scss";

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let singleUser = props.users.map((u) => (
    <SingleUser
      key={u.id}
      id={u.id}
      imgUrl={u.photos.small}
      name={u.name}
      status={u.status}
      country={u.country}
      city={u.city}
      isFollowed={u.followed}
      onFollow={props.onFollow}
      onUnfollow={props.onUnfollow}
      isFollowInProgress={props.followInProgress.some(
        (userId) => userId === u.id
      )}
    />
  ));

  return (
    <>
      {props.isFetching ? (
        <LoaderSpinner />
      ) : (
        <div className={styles.users}>
          <div className={styles.users__pagination}>
            {props.currentPage > 1 && (
              <div
                className={styles.users__paginationItem}
                onClick={() => props.onPageChanged(props.currentPage - 1)}
              >
                {"❮"}
              </div>
            )}
            {pages.map((page) => {
              if (
                (props.currentPage - 2 < page &&
                  page < props.currentPage + 2) ||
                (props.currentPage === 1 && page === 3) ||
                (props.currentPage === pagesCount && page === pagesCount - 3)
              ) {
                return (
                  <div
                    key={page}
                    className={
                      props.currentPage === page
                        ? `${styles.users__paginationItem} ${styles.users__paginationItem_selected}`
                        : styles.users__paginationItem
                    }
                    onClick={() => props.onPageChanged(page)}
                  >
                    {page}
                  </div>
                );
              } else {
                return false;
              }
            })}
            {props.currentPage < pagesCount && (
              <div
                className={styles.users__paginationItem}
                onClick={() => props.onPageChanged(props.currentPage + 1)}
              >
                {"❯"}
              </div>
            )}
          </div>
          <div className={styles.users__container}>{singleUser}</div>
        </div>
      )}
    </>
  );
};

export default Users;
