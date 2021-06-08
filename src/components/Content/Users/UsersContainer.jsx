import React, { useEffect } from "react";
import { connect } from "react-redux";

import Users from "./Users";
import {
  getUsers,
  getUsersOnPageChange,
  followUser,
  unfollowUser,
} from "../../../redux/reducers/usersReducer";
import {
  getCurrentPageSelector,
  getFollowInProgressSelector,
  getIsFetchingSelector,
  getPageSizeSelector,
  getTotalUsersCountSelector,
  getUsersSelector,
} from "../../../selectors/users-selectors";
import LoaderSpinner from "../../common/LoaderSpinner/LoaderSpinner";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPageChanged = (pageNumber) => {
    props.getUsersOnPageChange(pageNumber, props.pageSize);
  };

  if (props.isFetching) return <LoaderSpinner />;

  return (
    <Users
      users={props.users}
      totalUsersCount={props.totalUsersCount}
      pageSize={props.pageSize}
      onFollow={props.followUser}
      onUnfollow={props.unfollowUser}
      currentPage={props.currentPage}
      onPageChanged={onPageChanged}
      followInProgress={props.followInProgress}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followInProgress: getFollowInProgressSelector(state),
  };
};

export default connect(mapStateToProps, {
  getUsers,
  getUsersOnPageChange,
  followUser,
  unfollowUser,
})(UsersContainer);
