const ADD_MESSAGE = "ADD_NEW_MESSAGE";

let initialState = {
  peopleData: [
    {
      id: "1",
      name: "Dmitry",
      imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg",
    },
    {
      id: "2",
      name: "Sasha",
      imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg",
    },
    {
      id: "3",
      name: "Andrew",
      imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg",
    },
    {
      id: "4",
      name: "Sveta",
      imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg",
    },
    {
      id: "5",
      name: "Valera",
      imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg",
    },
    {
      id: "6",
      name: "Viktor",
      imgUrl: "https://image.flaticon.com/icons/svg/3135/3135715.svg",
    },
  ],
  conversationData: [
    {
      key: 1,
      id: 0,
      name: "Dmitry",
      text: "Hello David",
      imgUrl:
        "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
    },
    {
      key: 2,
      id: 1,
      name: "David",
      text: "Hello Dmitry.",
      imgUrl:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    },
    {
      key: 3,
      id: 0,
      name: "Dmitry",
      text: "How are you?",
      imgUrl:
        "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
    },
    {
      key: 4,
      id: 1,
      name: "David",
      text: "I am good, and how are you?",
      imgUrl:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
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
          "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
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
