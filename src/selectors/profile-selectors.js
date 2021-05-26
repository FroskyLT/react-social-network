export const getProfileSelector = (state) => state.profilePage.profile;
export const getUserInfoSelector = (state) => state.profilePage.userInfo;
export const getStatusSelector = (state) => state.profilePage.status;
export const getUserIdSelector = (state) => state.auth.userId;
export const getFollowInProgressSelector = (state) =>
  state.usersPage.followInProgress;
export const getIsFollowingUserSelector = (state) =>
  state.usersPage.isFollowingUser;
export const getFollowedUsersIdSelector = (state) =>
  state.usersPage.followedUsersId;
export const getProfileIsFetchingSelector = (state) =>
  state.profilePage.profileIsFetching;
