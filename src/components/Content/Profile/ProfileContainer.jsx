import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  initProfile,
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
  getProfileIsFetchingSelector,
  getProfileSelector,
  getStatusSelector,
  getUserIdSelector,
  getUserInfoSelector,
} from "../../../selectors/profile-selectors";
import LoaderSpinner from "../../common/LoaderSpinner/LoaderSpinner";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.currUserId; // "2";
    if (userId) {
      this.props.initProfile(this.props.currUserId, userId);
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    if (this.props.profileIsFetching) return <LoaderSpinner />;

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
  profileIsFetching: getProfileIsFetchingSelector(state),
});

export default compose(
  connect(mapStateToProps, {
    initProfile,
    setCurrentUserStatus,
    followUser,
    unfollowUser,
    checkIsFollowingSelectedUser,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
