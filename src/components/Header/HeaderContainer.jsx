import React from 'react';
import { connect } from 'react-redux';

import { clearAuthUserData, authenticateMe } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authenticateMe();
    }

    onLoginClick = () => {
        this.props.authenticateMe();
    }
    onLogoutClick = () =>  this.props.clearAuthUserData();


    render() {
        return <Header isLogged={this.props.isLogged} loginHandler={this.onLoginClick} logoutHandler={this.onLogoutClick} />
    };
}

const mapStateToProps = (state) => ({
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isLogged: state.auth.isLogged
});

export default connect(mapStateToProps, { authenticateMe, clearAuthUserData })(HeaderContainer);