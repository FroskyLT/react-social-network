import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getCurrentUserStatus, setCurrentUserStatus } from '../../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
// import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 14984; // "2";
        this.props.getUserProfile(userId);
        this.props.getCurrentUserStatus(userId);
    }

    render() {
        return <Profile {...this.props} updateUserStatus={this.props.setCurrentUserStatus} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, { getUserProfile, getCurrentUserStatus, setCurrentUserStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);
