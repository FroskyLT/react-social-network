const ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-ELEMENT';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                name: 'David',
                imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                text: state.newMessageText
            }
            state.conversationData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;   
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageElementActionCreator = text =>
    ({ type: UPDATE_MESSAGE, newText: text });

export default messagesReducer;