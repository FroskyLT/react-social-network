import React from "react";
import { connect } from "react-redux";

import { logout } from "../../redux/reducers/authReducer";
import {
  getIsLoggedSelector,
  getCurrUserPhotosSelector,
} from "../../selectors/header-selectors";
import Header from "./Header";

const HeaderContainer = ({ isLogged, userPhotos, logout }) => {
  return (
    <Header
      isLogged={isLogged}
      userPhotos={userPhotos}
      logoutHandler={logout}
    />
  );
};

const mapStateToProps = (state) => ({
  isLogged: getIsLoggedSelector(state),
  userPhotos: getCurrUserPhotosSelector(state),
});

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
