import React from "react";
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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersOnPageChange(pageNumber, this.props.pageSize);
  };

  render() {
    if (this.props.isFetching) return <LoaderSpinner />;

    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onFollow={this.props.followUser}
        onUnfollow={this.props.unfollowUser}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        followInProgress={this.props.followInProgress}
      />
    );
  }
}

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
