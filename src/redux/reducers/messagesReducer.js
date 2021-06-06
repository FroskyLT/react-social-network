const ADD_MESSAGE = "messages/ADD_NEW_MESSAGE";

let initialState = {
  peopleData: [
    {
      id: "1",
      name: "Johnny",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
    {
      id: "2",
      name: "Tom",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
    {
      id: "3",
      name: "Leonardo",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
    {
      id: "4",
      name: "Nicolas",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
    {
      id: "5",
      name: "Keanu",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
    {
      id: "6",
      name: "Keira",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
  ],
  conversationData: [
    {
      key: 1,
      id: 0,
      name: "Dmitry",
      text: "Hello David",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
    {
      key: 2,
      id: 1,
      name: "David",
      text: "Hello Dmitry.",
      imgUrl:
        "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png",
    },
    {
      key: 3,
      id: 0,
      name: "Dmitry",
      text: "How are you?",
      imgUrl:
        "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
    },
    {
      key: 4,
      id: 1,
      name: "David",
      text: "I am good, and how are you?",
      imgUrl:
        "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png",
    },
  ],
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        key: state.conversationData[state.conversationData.length - 1].key + 1,
        id: 1,
        name: "David",
        imgUrl:
          "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png",
        text: action.newMessageText,
      };

      return {
        ...state,
        conversationData: [...state.conversationData, newMessage],
      };
    }
    default:
      return state;
  }
};

// AC
export const addMessage = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default messagesReducer;
