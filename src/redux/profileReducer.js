const ADD_POST = 'ADD-NEW-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-ELEMENT';

let initialState = {
    postData: [
        { id: '1', content: 'Hello world', likesCount: '11', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
        { id: '2', content: 'This is my first post!', likesCount: '5', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
        { id: '3', content: 'Today I am tired.', likesCount: '1', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' },
        { id: '4', content: 'Happy holidays', likesCount: '91', imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png' }
    ],
    newPostText: 'Hello world!'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = { ...state };
            stateCopy.postData = { ...state.postData };
            let newPost = {
                id: 5,
                content: stateCopy.newPostText,
                likesCount: 0,
                imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
            }

            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST: {
            let stateCopy = { ...state };
            state.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostElementActionCreator = text =>
    ({ type: UPDATE_POST, newText: text });

export default profileReducer;