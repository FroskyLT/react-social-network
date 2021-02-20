import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile } from '../../../redux/profileReducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || "2";
        this.props.getUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(ProfileContainerWithUrl);