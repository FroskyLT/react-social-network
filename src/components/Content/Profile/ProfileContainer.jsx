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
  profile: state.profilePage.profile,
  userInfo: state.profilePage.userInfo,
  status: state.profilePage.status,
  currUserId: state.auth.userId,
  followInProgress: state.usersPage.followInProgress,
  isFollowingUser: state.usersPage.isFollowingUser,
  followedUsersId: state.usersPage.followedUsersId,
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
