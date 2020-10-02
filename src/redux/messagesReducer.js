const ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-ELEMENT';

let initialState = {
    peopleData: [
        { id: '1', name: 'Dmitry', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
        { id: '2', name: 'Sasha', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
        { id: '3', name: 'Andrew', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
        { id: '4', name: 'Sveta', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
        { id: '5', name: 'Valera', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" },
        { id: '6', name: 'Viktor', imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg" }
    ],
    conversationData: [
        { id: 0, name: 'Dmitry', text: 'Hello David', imgUrl: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" },
        { id: 1, name: 'David', text: 'Hello Dmitry.', imgUrl: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" },
        { id: 0, name: 'Dmitry', text: 'How are you?', imgUrl: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png" },
        { id: 1, name: 'David', text: 'I am good, and how are you?', imgUrl: "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" }
    ],
    newMessageText: 'Hello world!'
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                name: 'David',
                imgUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png',
                text: state.newMessageText
            }

            let stateCopy = { ...state };
            stateCopy.conversationData = [...state.conversationData];
            stateCopy.conversationData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        case UPDATE_MESSAGE: {
            let stateCopy = { ...state }
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageElementActionCreator = text =>
    ({ type: UPDATE_MESSAGE, newText: text });

export default messagesReducer;