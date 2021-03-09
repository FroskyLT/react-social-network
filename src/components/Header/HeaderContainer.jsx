import React from 'react';
import { connect } from 'react-redux';

import { clearAuthUserData, authenticateMe } from '../../redux/reducers/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authenticateMe();
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

export default connect(mapStateToProps, { authenticateMe, clearAuthUserData })(HeaderContainer);