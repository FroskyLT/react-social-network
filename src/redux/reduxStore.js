import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './reducers/profileReducer';
import messagesReducer from './reducers/messagesReducer';
import navbarReducer from './reducers/navbarReducer';
import usersReducer from './reducers/usersReducer';
import authReducer from './reducers/authReducer';
import followReducer from './reducers/followReducer';
import ThunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    follow: followReducer
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;