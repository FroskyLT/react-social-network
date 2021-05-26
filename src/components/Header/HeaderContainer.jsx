import React from "react";
import { connect } from "react-redux";

import { logout } from "../../redux/reducers/authReducer";
import { getIsLoggedSelector } from "../../selectors/header-selectors";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header
        isLogged={this.props.isLogged}
        logoutHandler={this.props.logout}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: getIsLoggedSelector(state),
});

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
