import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { authenticateMe, login } from "../../redux/reducers/authReducer";
import {
  getErrorSelector,
  getIsLoggedSelector,
} from "../../selectors/login-selectors";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
    if (this.props.isLogged) return <Redirect to="/" />;

    return (
      <Login
        error={this.props.error}
        loginHandler={this.props.login}
        authenticateHandler={this.props.authenticateMe}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  error: getErrorSelector(state),
  isLogged: getIsLoggedSelector(state),
});

export default connect(mapStateToProps, { authenticateMe, login })(
  LoginContainer
);
