import { AuthAPI } from "../../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_USER_ID = "SET_USER_ID";
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
        isLogged: true,
      };
    }
    case SET_USER_ID: {
      return {
        ...state,
        userId: action.userId,
        isLogged: true,
      };
    }
    case CLEAR_USER_DATA: {
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isLogged: false,
      };
    }
    default:
      return state;
  }
};

//AC
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
});
export const setUserId = (userId) => ({ type: SET_USER_ID, userId });
export const clearAuthUserData = () => ({ type: CLEAR_USER_DATA });

//TC
export const authenticateMe = () => (dispatch) => {
  AuthAPI.authenticateMe().then((responseData) => {
    if (responseData.resultCode === 0) {
      const { email, id, login } = responseData.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export const login = (loginData) => (dispatch) => {
  AuthAPI.login(loginData.email, loginData.password).then((responseData) => {
    if (responseData.resultCode === 0) {
      const { userId } = responseData.data;
      dispatch(setUserId(userId));
    }
  });
};

export const logout = () => (dispatch) => {
  AuthAPI.logout().then((responseData) => {
    if (responseData.resultCode === 0) {
      dispatch(clearAuthUserData());
    }
  });
};

export default authReducer;
