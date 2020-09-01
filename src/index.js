import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewPost, updateNewPostElement, updateNewMessageElement } from './redux/state';
import { addNewMessage } from './redux/state';


export let renderEntrieTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} updateNewPostElement={updateNewPostElement} 
        addNewMessage={addNewMessage} updateNewMessageElement={updateNewMessageElement}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntrieTree(state);

subscribe(renderEntrieTree);

serviceWorker.unregister();
