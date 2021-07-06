import { AuthAPI, ProfileAPI, SecurityAPI } from "../../api/api";
import { clearFriends } from "./usersReducer";

const SET_USER_DATA = "auth/SET_USER_DATA";
const CLEAR_USER_DATA = "auth/CLEAR_USER_DATA";
const SET_USER_PHOTOS = "auth/SET_USER_PHOTOS";
const SET_CAPTCHA_URL = "auth/SET_CAPTCHA_URL";
const CLEAR_USER_PHOTOS = "auth/CLEAR_USER_PHOTOS";
const SET_ERROR = "auth/SET_ERROR";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogged: false,
  userPhotos: null,
  captchaUrl: null, // is null, when not required
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
    case SET_CAPTCHA_URL: {
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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
export const setCaptchaUrl = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  captchaUrl,
});
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
  const response = await AuthAPI.login(
    loginData.email,
    loginData.password,
    loginData.captcha
  );

  if (response.resultCode === 0) {
    dispatch(setError(""));
    dispatch(setCaptchaUrl(null));
    dispatch(authenticateMe());
  } else {
    if (response.resultCode === 10) {
      const captchaUrl = await SecurityAPI.getCaptcha();

      dispatch(setCaptchaUrl(captchaUrl.url));
    }
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
