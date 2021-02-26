import { FollowAPI, UsersAPI } from "../api/api";

const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCH = "TOGGLE_IS_FETCH";
const TOGGLE_FOLLOW_IN_PROGRESS = "TOGGLE_FOLLOW_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    isFetching: false,
    currentPage: 1,
    followInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_TOGGLE: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return u.followed ?
                            { ...u, followed: false } : { ...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCH: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOW_IN_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFetching
                    ? [...state.followInProgress, action.userId]
                    : state.followInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

//Action creators
export const followToggle = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCH, isFetching });
export const toggleFollowInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOW_IN_PROGRESS, isFetching, userId });

//Thunk creators
export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));

    UsersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
};

export const getUsersOnPageChange = (pageNumber, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));

    UsersAPI.getUsers(pageNumber, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        });
};

export const followUser = (userId) => (dispatch) => {
    dispatch(toggleFollowInProgress(true, userId));
    FollowAPI.followUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followToggle(userId));
            }
        }).finally(() =>{
            dispatch(toggleFollowInProgress(false, userId));
        });
}

export const unfollowUser = (userId) => (dispatch) => {
    dispatch(toggleFollowInProgress(true, userId));

    FollowAPI.unfollowUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followToggle(userId));
            }
        }).finally(() =>{
            dispatch(toggleFollowInProgress(false, userId));
        });
}

export default usersReducer;