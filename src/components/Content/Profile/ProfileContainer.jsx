import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { ProfileAPI } from '../../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || "2";
        ProfileAPI.getSelectedUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(ProfileContainerWithUrl);