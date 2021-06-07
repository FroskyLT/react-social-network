import { FollowAPI, UsersAPI } from "../../api/api";

const FOLLOW_TOGGLE = "users/FOLLOW_TOGGLE";
const CHECK_IS_FOLLOWING_USER = "users/CHECK_IS_FOLLOWING_USER";
const SET_IS_FOLLOWING_USER = "users/SET_IS_FOLLOWING_USER";
const SET_USERS = "users/SET_USERS";
const SET_FRIENDS = "users/SET_FRIENDS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCH = "users/TOGGLE_IS_FETCH";
const TOGGLE_FOLLOW_IN_PROGRESS = "users/TOGGLE_FOLLOW_IN_PROGRESS";

let initialState = {
  users: [],
  friends: [],
  totalUsersCount: 0,
  isFollowingUser: null,

  pageSize: 24,
  currentPage: 1,

  isFetching: false,
  followInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return u.followed
              ? { ...u, followed: false }
              : { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case SET_IS_FOLLOWING_USER: {
      return {
        ...state,
        isFollowingUser: action.isFollowing,
      };
    }
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_FRIENDS: {
      return {
        ...state,
        friends: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }
    case TOGGLE_IS_FETCH: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_FOLLOW_IN_PROGRESS: {
      return {
        ...state,
        followInProgress: action.isFetching
          ? [...state.followInProgress, action.userId]
          : state.followInProgress.filter((id) => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

//Action creators
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setFriends = (users) => ({ type: SET_FRIENDS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCH,
  isFetching,
});

export const checkIsFollowingUser = (selectedUserId) => ({
  type: CHECK_IS_FOLLOWING_USER,
  selectedUserId,
});
export const setIsFollowingUser = (isFollowing) => ({
  type: SET_IS_FOLLOWING_USER,
  isFollowing,
});
export const toggleFollow = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export const toggleFollowInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOW_IN_PROGRESS,
  isFetching,
  userId,
});

//Thunk creators
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  const data = await UsersAPI.getUsers(currentPage, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const getFriends = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  const data = await UsersAPI.getFollowedUsers();

  dispatch(toggleIsFetching(false));
  dispatch(setFriends(data.items));
};

export const getUsersOnPageChange =
  (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));

    const data = await UsersAPI.getUsers(pageNumber, pageSize);

    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
  };

export const followUser = (userId) => (dispatch) => {
  dispatch(followToggleUser(userId, FollowAPI.followUser));
};

export const unfollowUser = (userId) => (dispatch) => {
  dispatch(followToggleUser(userId, FollowAPI.unfollowUser));
};

const followToggleUser = (userId, apiMethod) => async (dispatch) => {
  dispatch(toggleFollowInProgress(true, userId));

  const data = await apiMethod(userId);

  if (data.resultCode === 0) dispatch(toggleFollow(userId));

  dispatch(toggleFollowInProgress(false, userId));
};

export const checkIsFollowingSelectedUser = (userId) => async (dispatch) => {
  const data = await FollowAPI.checkIsFollowingUser(userId);

  dispatch(setIsFollowingUser(data));
};

export default usersReducer;
