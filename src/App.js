import React, { Suspense, useEffect } from "react";
import "./app.scss";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { init } from "./redux/reducers/appReducer";

import Home from "./components/Content/Home/Home";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import LoaderSpinner from "./components/common/LoaderSpinner/LoaderSpinner";

const ProfileContainer = React.lazy(() =>
  import("./components/Content/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Content/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Content/Users/UsersContainer")
);
const LoginContainer = React.lazy(() =>
  import("./components/Login/LoginContainer")
);

const App = ({ initialized, init }) => {
  useEffect(() => {
    init();
  }, [init]);

  if (!initialized) return <LoaderSpinner />;

  return (
    <div className="app">
      <HeaderContainer />
      <Suspense fallback={<LoaderSpinner />}>
        <div className="content">
          <Route exact path="/" render={() => <Home />} />
          <Suspense fallback={<LoaderSpinner />}>
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <LoginContainer />} />
          </Suspense>
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </Suspense>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, { init }))(App);
