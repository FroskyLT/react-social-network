import { AuthAPI } from "../../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const CLEAR_USER_DATA = "auth/CLEAR_USER_DATA";
const SET_ERROR = "auth/SET_ERROR";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogged: false,
  error: "",
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
    case CLEAR_USER_DATA: {
      return {
        ...state,
        userId: null,
        email: null,
        login: null,
        isLogged: false,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.errorMessage,
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
export const clearAuthUserData = () => ({ type: CLEAR_USER_DATA });
export const setError = (errorMessage) => ({ type: SET_ERROR, errorMessage });

//TC
export const authenticateMe = () => (dispatch) => {
  return AuthAPI.authenticateMe().then((responseData) => {
    if (responseData.resultCode === 0) {
      const { email, id, login } = responseData.data;
      dispatch(setAuthUserData(id, email, login));
    }
  });
};

export const login = (loginData) => (dispatch) => {
  AuthAPI.login(loginData.email, loginData.password).then((responseData) => {
    if (responseData.resultCode === 0) {
      dispatch(setError(""));
      dispatch(authenticateMe());
    } else {
      dispatch(setError(responseData.messages[0]));
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
