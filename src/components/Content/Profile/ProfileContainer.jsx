import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from "axios";
import { setUserProfile } from '../../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            }
            )
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    id: 2,
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);