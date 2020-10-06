const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [ ]
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
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW_TOGGLE, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;