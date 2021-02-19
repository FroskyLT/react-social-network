import React from 'react';
import { connect } from 'react-redux';

import { setAuthUserData, clearAuthUserData } from '../../redux/authReducer';
import Header from './Header';
import { AuthAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        AuthAPI.authenticateMe()
            .then(responseData => {
                if (responseData.resultCode === 0) {
                    const { email, id, login } = responseData.data;
                    this.props.setAuthUserData(id, email, login);
                }
            }
            )
    }

    onLoginClick = () => {
        AuthAPI.authenticateMe()
            .then(responseData => {
                if (responseData.resultCode === 0) {
                    const { email, id, login } = responseData.data;
                    this.props.setAuthUserData(id, email, login);
                }
            }
            )
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

export default connect(mapStateToProps, { setAuthUserData, clearAuthUserData })(HeaderContainer);