import React from 'react';
import { connect } from 'react-redux';

import { authenticateMe } from '../../redux/authReducer';
import Login from './Login';

class LoginContainer extends React.Component {
    render() {
        return <Login loginHandler={this.props.authenticateMe} />
    };
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { authenticateMe })(LoginContainer);