import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import messagesReducer from "./reducers/messagesReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import appReducer from "./reducers/appReducer";
import ThunkMiddleware from "redux-thunk";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

// Redux DevTools in Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
);

window.store = store;

export default store;
