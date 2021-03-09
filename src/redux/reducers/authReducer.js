import { AuthAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const CLEAR_USER_DATA = "CLEAR_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogged: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData,
                isLogged: true
            }
        }
        case CLEAR_USER_DATA: {
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isLogged: false
            }
        }
        default:
            return state;
    }
}

//AC
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, userData: { userId, email, login } });
export const clearAuthUserData = () => ({ type: CLEAR_USER_DATA });

//TC
export const authenticateMe = () => (dispatch) => {
    AuthAPI.authenticateMe()
    .then(responseData => {
        if (responseData.resultCode === 0) {
            const { email, id, login } = responseData.data;
            dispatch(setAuthUserData(id, email, login));
        }
    });
}

export default authReducer
