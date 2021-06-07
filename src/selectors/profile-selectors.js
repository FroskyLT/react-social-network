export const getProfileSelector = (state) => state.profilePage.profile;
export const getFriendsSelector = (state) => state.usersPage.friends;
export const getStatusSelector = (state) => state.profilePage.status;
export const getUserIdSelector = (state) => state.auth.userId;
export const getFollowInProgressSelector = (state) =>
  state.usersPage.followInProgress;
export const getIsFollowingUserSelector = (state) =>
  state.usersPage.isFollowingUser;
export const getProfileIsFetchingSelector = (state) =>
  state.profilePage.profileIsFetching;
