import React from "react";
import "./app.scss";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { init } from "./redux/reducers/appReducer";

import Home from "./components/Content/Home/Home";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import LoginContainer from "./components/Login/LoginContainer";
import LoaderSpinner from "./components/common/LoaderSpinner/LoaderSpinner";

class App extends React.Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    if (!this.props.initialized) return <LoaderSpinner />;

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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { init }))(App);
