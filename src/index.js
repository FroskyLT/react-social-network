import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
        addNewPost={store.addNewPost.bind(store)} updateNewPostElement={store.updateNewPostElement.bind(store)}
        addNewMessage={store.addNewMessage.bind(store)} updateNewMessageElement={store.updateNewMessageElement.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

serviceWorker.unregister();
