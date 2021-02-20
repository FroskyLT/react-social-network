import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || "2";
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isLogged) return <Redirect to="/login" />

        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLogged: state.auth.isLogged
});

const ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(ProfileContainerWithUrl);