import { ProfileAPI } from "../../api/api";

const ADD_POST = 'ADD_NEW_POST';
const UPDATE_POST = 'UPDATE_NEW_POST_ELEMENT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        { id: '1', content: {text: 'Hello world', image: null}, likesCount: '11', dateCreated: '2019-05-01'},
        { id: '2', content: {text: 'This is my first post!', image: null}, likesCount: '5', dateCreated: '2019-11-31' },
        { id: '3', content: {text: 'Today I am tired.', image: 'https://64.media.tumblr.com/8a5e26b8799b3102e17442d97d2f8c1b/tumblr_pib55mzubw1uue2yt_540.jpg'}, likesCount: '1', dateCreated: '2020-03-19' },
        { id: '4', content: {text: 'Happy holidays', image: null}, likesCount: '91', dateCreated: '2020-12-18' },
        { id: '5', content: {text: null, image: 'https://www.fargomoorhead.org/wp-content/uploads/2019/10/Sunset-from-parking-ramp.jpg'}, likesCount: '13', dateCreated: '2021-02-11' },
        { id: '6', content: {text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu ex. Vivamus elementum, enim id molestie blandit, urna risus scelerisque nunc, vitae elementum quam lorem sed orci. Aenean sagittis blandit accumsan. Ut ante dolor, aliquam sit amet turpis non, suscipit ullamcorper ex. Sed sem leo, rutrum ut consequat eu.`, image: null}, likesCount: '1', dateCreated: '2021-03-15' }
    ],
    newPostText: 'Hello world!',
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
    totalPosts: 4,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.totalPosts + 1,
                content: state.newPostText,
                likesCount: 0,
                imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
                totalPosts: state.totalPosts + 1
            };
        }
        case UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

// AC
export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostElement = text => ({ type: UPDATE_POST, newText: text });
export const setStatus = status => ({ type: SET_STATUS, status });

//TC
export const getUserProfile = (userId) => (dispatch) => {
    ProfileAPI.getSelectedUserProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
}

export const setCurrentUserStatus = (updatedStatus) => (dispatch) => {
    ProfileAPI.updateCurrentUserStatus(updatedStatus)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(updatedStatus));
            }
        });
}

export const getCurrentUserStatus = (userId) => (dispatch) => {
    ProfileAPI.getCurrentUserStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
        });
}

export default profileReducer;