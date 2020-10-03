const FOLLOW_TOGGLE = "FOLLOW-TOGGLE";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {
            imgUrl: "",
            id: 1, name: "Dmitry K.", status: "I am looking for a job right now", country: "Belarus", city: "Minsk", follow: false
        },
        {
            imgUrl: "",
            id: 2, name: "Joe L.", status: "I am rich", country: "US", city: "Los Angeles", follow: false
        },
        {
            imgUrl: "",
            id: 3, name: "Judy D.", status: "I am exhousted", country: "Mexico", city: "Mexico", follow: false
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_TOGGLE: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userID) {
                        if (u.follow) return { ...u, follow: false }
                        else return { ...u, follow: true }
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

export const followAC = (userId) => ({ type: FOLLOW_TOGGLE, action: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, action: users });

export default usersReducer;