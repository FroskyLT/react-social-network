import profileReducer, { addPost, deletePost } from "./profileReducer";

const state = {
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
  ],
};

it("new post should be added", () => {
  // 1. test data
  const action = addPost("new post");
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postData.length).toBe(3);
});

it("new post message should be correct", () => {
  // 1. test data
  const action = addPost("new post");
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postData[newState.postData.length - 1].content).toBe(
    "new post"
  );
});

it("length of posts after deleting should be correct", () => {
  // 1. test data
  const action = deletePost("2");
  // 2. action
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postData.length).toBe(1);
});
