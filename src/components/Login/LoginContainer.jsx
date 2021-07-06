import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { authenticateMe, login } from "../../redux/reducers/authReducer";
import {
  getCaptchaUrl,
  getErrorSelector,
  getIsLoggedSelector,
} from "../../selectors/login-selectors";
import Login from "./Login";

const LoginContainer = (props) => {
  const { isLogged, error, captchaUrl, login, authenticateMe } = props;

  if (isLogged) return <Redirect to="/" />;

  return (
    <Login
      error={error}
      captchaUrl={captchaUrl}
      loginHandler={login}
      authenticateHandler={authenticateMe}
    />
  );
};

const mapStateToProps = (state) => ({
  error: getErrorSelector(state),
  isLogged: getIsLoggedSelector(state),
  captchaUrl: getCaptchaUrl(state),
});

export default connect(mapStateToProps, { authenticateMe, login })(
  LoginContainer
);
