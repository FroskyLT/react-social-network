import React from 'react';
import * as axios from "axios";

import { connect } from 'react-redux';
import { setAuthUserData, clearAuthUserData } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const { email, id, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            }
            )
    }

    onLoginClick = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const { email, id, login } = response.data.data;
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