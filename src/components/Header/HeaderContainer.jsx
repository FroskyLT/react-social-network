import React from "react";
import { connect } from "react-redux";

import { logout } from "../../redux/reducers/authReducer";
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
  isLogged: state.auth.isLogged,
});

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer);
