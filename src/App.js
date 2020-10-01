import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Content/Profile/Profile';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Settings from './components/Content/Settings/Settings';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavbarContainer />
      <div className='content' >
        <Route path='/profile' render={() => <Profile />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
  );
}

export default App;
