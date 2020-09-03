import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className='App'>
      <Header />
      <Navbar state={props.state.navbarPage} />
      <div className='content' >
        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
        <Route path='/dialogs' render={() => <Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
