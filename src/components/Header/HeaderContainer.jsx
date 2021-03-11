import React from 'react';
import { connect } from 'react-redux';

import { clearAuthUserData, authenticateMe } from '../../redux/reducers/authReducer';
import { getFollowedUsers } from '../../redux/reducers/usersReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authenticateMe();
        this.props.getFollowedUsers();
    }

    render() {
        return <Header
            isLogged={this.props.isLogged}
            logoutHandler={this.props.clearAuthUserData}
        />
    };
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
});

export default connect(mapStateToProps, { authenticateMe, clearAuthUserData, getFollowedUsers })(HeaderContainer);