import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(store.getState());

store.subscribe(() => {
  renderEntireTree(store.getState());
});

serviceWorker.unregister();
