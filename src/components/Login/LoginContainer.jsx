import React from "react";
import { connect } from "react-redux";

import { authenticateMe, login } from "../../redux/reducers/authReducer";
import Login from "./Login";

class LoginContainer extends React.Component {
  render() {
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
  error: state.auth.error,
});

export default connect(mapStateToProps, { authenticateMe, login })(
  LoginContainer
);
