import React from "react";
import "./app.scss";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import Home from "./components/Content/Home/Home";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import { Route } from "react-router-dom";
import LoginContainer from "./components/Login/LoginContainer";

function App() {
  return (
    <div className="app">
      <HeaderContainer />
      <div className="content">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <LoginContainer />} />
      </div>
    </div>
  );
}

export default App;
