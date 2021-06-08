import React from "react";
import { connect } from "react-redux";

import { logout } from "../../redux/reducers/authReducer";
import { getIsLoggedSelector } from "../../selectors/header-selectors";
import Header from "./Header";

const HeaderContainer = ({ isLogged, logout }) => {
  return <Header isLogged={isLogged} logoutHandler={logout} />;
};

const mapStateToProps = (state) => ({
  isLogged: getIsLoggedSelector(state),
});

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
