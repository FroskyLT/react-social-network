import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapAuthToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

export const withAuthRedirect = (Component) => {
  const AuthRedirectComponent = (props) => {
    if (!props.isLogged) return <Redirect to="/login" />;

    return <Component {...props} />;
  };

  return connect(mapAuthToProps)(AuthRedirectComponent);
};
