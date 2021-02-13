const ADD_POST = 'ADD-NEW-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-ELEMENT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    postData: [
        { id: '1', content: 'Hello world', likesCount: '11', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
        { id: '2', content: 'This is my first post!', likesCount: '5', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
        { id: '3', content: 'Today I am tired.', likesCount: '1', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
        { id: '4', content: 'Happy holidays', likesCount: '91', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' }
    ],
    newPostText: 'Hello world!',
    profile: null,
    lastId: 4,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.lastId + 1,
                content: state.newPostText,
                likesCount: 0,
                imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
                lastId: state.lastId + 1
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
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostElement = text => ({ type: UPDATE_POST, newText: text });

export default profileReducer;