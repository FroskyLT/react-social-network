import { FollowAPI, UsersAPI } from "../../api/api";

const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const CHECK_IS_FOLLOWING_USER = "CHECK_IS_FOLLOWING_USER";
const SET_IS_FOLLOWING_USER = "SET_IS_FOLLOWING_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_FOLLOWED_USERS = "SET_FOLLOWED_USERS";
const ADD_FOLLOWED_USER = "ADD_FOLLOWED_USER";
const DELETE_FOLLOWED_USER = "DELETE_FOLLOWED_USER";
const TOGGLE_IS_FETCH = "TOGGLE_IS_FETCH";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

let initialState = {
  users: [],
  followedUsersId: [],
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
    case CHECK_IS_FOLLOWING_USER: {
      return {
        ...state,
        isFollowingUser: state.followedUsersId.some(
          (friend) => friend === Number(action.selectedUserId)
        ),
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
    case SET_FOLLOWED_USERS: {
      return {
        ...state,
        followedUsersId: action.selectedUsers.map((user) => user.id),
      };
    }
    case ADD_FOLLOWED_USER: {
      return {
        ...state,
        followedUsers: [...state.followedUsersId, action.selectedUserId],
      };
    }
    case DELETE_FOLLOWED_USER: {
      return {
        ...state,
        followedUsers: state.followedUsersId.filter(
          (user) => user !== action.selectedUserId
        ),
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
export const setFollowedUsers = (selectedUsers) => ({
  type: SET_FOLLOWED_USERS,
  selectedUsers,
});
export const addFollowedUser = (selectedUserId) => ({
  type: ADD_FOLLOWED_USER,
  selectedUserId,
});
export const deleteFollowedUser = (selectedUserId) => ({
  type: DELETE_FOLLOWED_USER,
  selectedUserId,
});
export const toggleFollow = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export const toggleFollowInProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOW_IN_PROGRESS,
  isFetching,
  userId,
});

//Thunk creators
export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));

  UsersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};

export const getUsersOnPageChange = (pageNumber, pageSize) => (dispatch) => {
  dispatch(setCurrentPage(pageNumber));
  dispatch(toggleIsFetching(true));

  UsersAPI.getUsers(pageNumber, pageSize).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
  });
};

export const getFollowedUsers = () => (dispatch) => {
  UsersAPI.getFollowedUsers().then((friendsResponse) => {
    dispatch(setFollowedUsers(friendsResponse.items));
  });
};

export const followUser = (userId) => (dispatch) => {
  dispatch(toggleFollowInProgress(true, userId));
  FollowAPI.followUser(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
        dispatch(addFollowedUser(userId));
      }
    })
    .finally(() => {
      dispatch(toggleFollowInProgress(false, userId));
    });
};

export const unfollowUser = (userId) => (dispatch) => {
  dispatch(toggleFollowInProgress(true, userId));

  FollowAPI.unfollowUser(userId)
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(toggleFollow(userId));
        dispatch(deleteFollowedUser(userId));
      }
    })
    .finally(() => {
      dispatch(toggleFollowInProgress(false, userId));
    });
};

export const checkIsFollowingSelectedUser = (userId) => (dispatch) => {
  return FollowAPI.checkIsFollowingUser(userId).then((data) => {
    dispatch(setIsFollowingUser(data));
  });
};

export default usersReducer;
