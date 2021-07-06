import { AuthAPI, ProfileAPI } from "../../api/api";
import { clearFriends } from "./usersReducer";

const SET_USER_DATA = "auth/SET_USER_DATA";
const CLEAR_USER_DATA = "auth/CLEAR_USER_DATA";
const SET_USER_PHOTOS = "auth/SET_USER_PHOTOS";
const CLEAR_USER_PHOTOS = "auth/CLEAR_USER_PHOTOS";
const SET_ERROR = "auth/SET_ERROR";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogged: false,
  userPhotos: null,
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
    case SET_USER_PHOTOS: {
      return {
        ...state,
        userPhotos: action.photos,
      };
    }
    case CLEAR_USER_PHOTOS: {
      return {
        ...state,
        userPhotos: null,
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
export const setUserPhotos = (photos) => ({ type: SET_USER_PHOTOS, photos });
export const clearUserPhotos = () => ({ type: CLEAR_USER_PHOTOS });
export const setError = (errorMessage) => ({ type: SET_ERROR, errorMessage });

//TC
export const authenticateMe = () => async (dispatch) => {
  const authResponse = await AuthAPI.authenticateMe();

  if (authResponse.resultCode === 0) {
    const { email, id, login } = authResponse.data;
    dispatch(setAuthUserData(id, email, login));

    const profileResponse = await ProfileAPI.getSelectedUserProfile(id);
    dispatch(setUserPhotos(profileResponse.photos));
  }
};

export const login = (loginData) => async (dispatch) => {
  const response = await AuthAPI.login(loginData.email, loginData.password);

  if (response.resultCode === 0) {
    dispatch(setError(""));
    dispatch(authenticateMe());
  } else {
    dispatch(setError(response.messages[0]));
  }
};

export const logout = () => async (dispatch) => {
  const response = await AuthAPI.logout();

  if (response.resultCode === 0) {
    dispatch(clearAuthUserData());
    dispatch(clearUserPhotos());
    dispatch(clearFriends());
  }
};

export default authReducer;