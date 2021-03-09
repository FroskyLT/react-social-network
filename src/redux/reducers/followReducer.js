import { FollowAPI } from "../../api/api";

const FOLLOW_USER_DATA = "FOLLOW_USER_DATA";
const CHECK_IS_FOLLOWING_USER = "CHECK_IS_FOLLOWING_USER";

let initialState = {
    // userId: null,
    // email: null,
    // login: null,
    // isLogged: false,
};

const followReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_USER_DATA: {
        //     return {
        //         ...state,
        //         ...action.userData,
        //         isLogged: true
        //     }
        // }
        // case CLEAR_USER_DATA: {
        //     return {
        //         ...state,
        //         userId: null,
        //         email: null,
        //         login: null,
        //         isLogged: false
        //     }
        // }
        default:
            return state;
    }
}

//AC
// export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, userData: { userId, email, login } });
// export const clearAuthUserData = () => ({ type: CLEAR_USER_DATA });

//TC
// export const authenticateMe = () => (dispatch) => {
//     AuthAPI.authenticateMe()
//     .then(responseData => {
//         if (responseData.resultCode === 0) {
//             const { email, id, login } = responseData.data;
//             dispatch(setAuthUserData(id, email, login));
//         }
//     });
// }

export default followReducer
