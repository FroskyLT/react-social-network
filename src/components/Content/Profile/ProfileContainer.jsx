import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  initProfile,
  setCurrentUserStatus,
  saveImage,
  updateProfile,
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
  getFollowInProgressSelector,
  getIsFollowingUserSelector,
  getProfileIsFetchingSelector,
  getProfileSelector,
  getStatusSelector,
  getUserIdSelector,
  getFriendsSelector,
} from "../../../selectors/profile-selectors";
import LoaderSpinner from "../../common/LoaderSpinner/LoaderSpinner";

const ProfileContainer = (props) => {
  useEffect(() => {
    const userId = props.match.params.userId || props.currUserId; // "2";
    if (userId) {
      props.initProfile(props.currUserId, userId);
    } else {
      props.history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.userId]);

  if (props.profileIsFetching) return <LoaderSpinner />;

  return (
    <Profile
      profile={props.profile}
      friends={props.friends}
      status={props.status}
      currUserId={props.currUserId}
      followInProgress={props.followInProgress}
      updateUserStatus={props.setCurrentUserStatus}
      isFollowingUser={props.isFollowingUser}
      onFollow={props.followUser}
      onUnfollow={props.unfollowUser}
      isFollowing={props.checkIsFollowingSelectedUser}
      saveImage={props.saveImage}
      updateProfile={props.updateProfile}
    />
  );
};

const mapStateToProps = (state) => ({
  profile: getProfileSelector(state),
  friends: getFriendsSelector(state),
  status: getStatusSelector(state),
  currUserId: getUserIdSelector(state),
  followInProgress: getFollowInProgressSelector(state),
  isFollowingUser: getIsFollowingUserSelector(state),
  profileIsFetching: getProfileIsFetchingSelector(state),
});

export default compose(
  connect(mapStateToProps, {
    initProfile,
    setCurrentUserStatus,
    followUser,
    unfollowUser,
    checkIsFollowingSelectedUser,
    saveImage,
    updateProfile,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);
