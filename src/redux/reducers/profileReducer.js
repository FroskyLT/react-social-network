import { ProfileAPI } from "../../api/api";
import { currentTime } from "../../utils/date";
import {
  checkIsFollowingSelectedUser,
  clearFriends,
  getFriends,
} from "./usersReducer";

const ADD_POST = "profile/ADD_POST";
const DELETE_POST = "profile/DELETE_POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTO = "profile/SET_PHOTO";
const SET_PROFILE_UPDATING_ERRORS = "profile/SET_PROFILE_UPDATING_ERRORS";
const START_PROFILE_FETCH = "profile/START_PROFILE_FETCH";
const END_PROFILE_FETCH = "profile/END_PROFILE_FETCH";

let initialState = {
  postData: [
    {
      id: "1",
      content: { text: "Hello world", image: null },
      likesCount: 11,
      dateCreated: "2019-05-01",
      comments: null,
    },
    {
      id: "2",
      content: { text: "This is my first post!", image: null },
      likesCount: 5,
      dateCreated: "2019-11-31",
      comments: null,
    },
    {
      id: "3",
      content: {
        text: "Today I am tired.",
        image:
          "https://64.media.tumblr.com/8a5e26b8799b3102e17442d97d2f8c1b/tumblr_pib55mzubw1uue2yt_540.jpg",
      },
      likesCount: 0,
      dateCreated: "2020-03-19",
      comments: null,
    },
    {
      id: "4",
      content: {
        text: "Happy holidays",
        image: null,
      },
      likesCount: 91,
      dateCreated: "2020-12-18",
      comments: [
        {
          id: 1,
          userName: "Jupiter",
          userPhoto:
            "https://image.freepik.com/vector-gratis/ilustracion-planeta-jupiter_6249-53.jpg",
          text: "Wow!",
        },
        {
          id: 2,
          userName: "Earth",
          userPhoto:
            "https://image.freepik.com/vector-gratis/ilustracion-planeta-tierra_6249-51.jpg",
          text: "Where are you?",
        },
        {
          id: 3,
          userName: "Neptune",
          userPhoto:
            "https://image.freepik.com/vector-gratis/ilustracion-planeta-neptuno_6249-56.jpg",
          text: "Great",
        },
      ],
    },
    {
      id: "5",
      content: {
        text: null,
        image:
          "https://www.fargomoorhead.org/wp-content/uploads/2019/10/Sunset-from-parking-ramp.jpg",
      },
      likesCount: 13,
      dateCreated: "2021-02-11",
      comments: null,
    },
    {
      id: "6",
      content: {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu ex. Vivamus elementum, enim id molestie blandit, urna risus scelerisque nunc, vitae elementum quam lorem sed orci. Aenean sagittis blandit accumsan. Ut ante dolor, aliquam sit amet turpis non, suscipit ullamcorper ex. Sed sem leo, rutrum ut consequat eu.",
        image: null,
      },
      likesCount: 1,
      dateCreated: "2021-03-15",
      comments: null,
    },
  ],
  profile: null,
  // profile: {
  // userId: required(integer)
  // lookingForAJob: required(boolean)
  // lookingForAJobDescription: required(string)
  // fullName: required(string)
  // contacts: required(object)
  // github: required(string)
  // vk: required(string)
  // facebook: required(string)
  // instagram: required(string)
  // twitter: required(string)
  // website: required(string)
  // youtube: required(string)
  // mainLink: required(string)
  // photos: required(object)

  //     aboutMe: null,
  //     contacts: {facebook: null, github: null, instagram: null, mainLink: null, twitter: null, vk: null, website: null, youtube: null,  fullName: null},
  //     lookingForAJob: null,
  //     lookingForAJobDescription: null,
  //     photos: {small: null, large: null},
  //     userId: 14984,
  // },
  status: "",
  profileIsFetching: true,
  profileUpdatingErrors: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PROFILE_FETCH: {
      return {
        ...state,
        profileIsFetching: true,
      };
    }
    case END_PROFILE_FETCH: {
      return {
        ...state,
        profileIsFetching: false,
      };
    }
    case ADD_POST: {
      const dateCreated = currentTime();

      const newPost = {
        id: state.postData[state.postData.length - 1] + 1,
        content: action.postText,
        likesCount: 0,
        dateCreated: dateCreated,
        comments: null,
        imgUrl:
          "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter((post) => post.id !== action.postId),
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    case SET_PROFILE_UPDATING_ERRORS: {
      return {
        ...state,
        profileUpdatingErrors: action.errors,
      };
    }
    default:
      return state;
  }
};

// AC
export const addPost = (postText) => ({ type: ADD_POST, postText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setUserPhoto = (photos) => ({ type: SET_PHOTO, photos });
export const setProfileUpdatingErrors = (errors) => ({
  type: SET_PROFILE_UPDATING_ERRORS,
  errors,
});
export const startProfileFetch = () => ({ type: START_PROFILE_FETCH });
export const endProfileFetch = () => ({ type: END_PROFILE_FETCH });

//TC
const getUserProfile = (userId) => async (dispatch) => {
  const data = await ProfileAPI.getSelectedUserProfile(userId);

  dispatch(setUserProfile(data));
};

const getCurrentUserStatus = (userId) => async (dispatch) => {
  const data = await ProfileAPI.getCurrentUserStatus(userId);

  dispatch(setStatus(data));
};

export const setCurrentUserStatus = (updatedStatus) => async (dispatch) => {
  const data = await ProfileAPI.updateCurrentUserStatus(updatedStatus);

  if (data.resultCode === 0) {
    dispatch(setStatus(updatedStatus));
  }
};

export const saveImage = (image) => async (dispatch) => {
  const response = await ProfileAPI.saveImage(image);

  if (response.resultCode === 0) {
    dispatch(setUserPhoto(response.data.photos));
  }
};

export const initProfile = (currUserId, userId) => async (dispatch) => {
  dispatch(startProfileFetch());

  await dispatch(getUserProfile(userId));
  await dispatch(getCurrentUserStatus(userId));
  if (currUserId && userId !== currUserId) {
    await dispatch(checkIsFollowingSelectedUser(userId));
    dispatch(clearFriends());
  } else if (userId === currUserId) {
    await dispatch(getFriends());
  }

  dispatch(endProfileFetch());
};

export const updateProfile = (updatedProfile) => async (dispatch, getState) => {
  const response = await ProfileAPI.updateProfile(updatedProfile);

  if (response.resultCode === 0) {
    const userId = getState().auth.userId;

    dispatch(getUserProfile(userId));
    dispatch(setProfileUpdatingErrors(null));
  } else {
    dispatch(setProfileUpdatingErrors(response.messages));
  }

  return response.resultCode;
};

export default profileReducer;
