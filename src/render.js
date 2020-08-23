import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addNewPost } from './redux/state';
import { addNewMessage } from './redux/state';


export let renderEntrieTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} addNewMessage={addNewMessage} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

