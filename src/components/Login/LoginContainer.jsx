import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { authenticateMe, login } from "../../redux/reducers/authReducer";
import {
  getErrorSelector,
  getIsLoggedSelector,
} from "../../selectors/login-selectors";
import Login from "./Login";

const LoginContainer = ({ isLogged, error, login, authenticateMe }) => {
  if (isLogged) return <Redirect to="/" />;

  return (
    <Login
      error={error}
      loginHandler={login}
      authenticateHandler={authenticateMe}
    />
  );
};

const mapStateToProps = (state) => ({
  error: getErrorSelector(state),
  isLogged: getIsLoggedSelector(state),
});

export default connect(mapStateToProps, { authenticateMe, login })(
  LoginContainer
);
