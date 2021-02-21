import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { getUsers, getUsersOnPageChange, followUser, unfollowUser } from '../../../redux/usersReducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersOnPageChange(pageNumber, this.props.pageSize);
    }
    
    render() {
        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onFollow={this.props.followUser}
            onUnfollow={this.props.unfollowUser}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
            followInProgress={this.props.followInProgress}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
    }
}

export default withAuthRedirect(connect(mapStateToProps, { getUsers, getUsersOnPageChange, followUser, unfollowUser })(UsersContainer));
