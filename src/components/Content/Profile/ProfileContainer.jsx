import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getCurrentUserStatus,
  setCurrentUserStatus,
} from "../../../redux/reducers/profileReducer";
import {
  followUser,
  unfollowUser,
  checkIsFollowingSelectedUser,
} from "../../../redux/reducers/usersReducer";
import { withRouter } from "react-router-dom";
// import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from "redux";
import {
  getFollowedUsersIdSelector,
  getFollowInProgressSelector,
  getIsFollowingUserSelector,
  getProfileSelector,
  getStatusSelector,
  getUserIdSelector,
  getUserInfoSelector,
} from "../../../selectors/profile-selectors";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.currUserId; // "2";
    if (userId) {
      this.props.getUserProfile(userId);
      this.props.getCurrentUserStatus(userId);

      if (userId !== this.props.currUserId) {
        this.props.checkIsFollowingSelectedUser(userId);
      }
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        currUserId={this.props.currUserId}
        followInProgress={this.props.followInProgress}
        updateUserStatus={this.props.setCurrentUserStatus}
        isFollowingUser={this.props.isFollowingUser}
        onFollow={this.props.followUser}
        onUnfollow={this.props.unfollowUser}
        isFollowing={this.props.checkIsFollowingSelectedUser}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: getProfileSelector(state),
  userInfo: getUserInfoSelector(state),
  status: getStatusSelector(state),
  currUserId: getUserIdSelector(state),
  followInProgress: getFollowInProgressSelector(state),
  isFollowingUser: getIsFollowingUserSelector(state),
  followedUsersId: getFollowedUsersIdSelector(state),
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getCurrentUserStatus,
    setCurrentUserStatus,
    followUser,
    unfollowUser,
    checkIsFollowingSelectedUser,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
