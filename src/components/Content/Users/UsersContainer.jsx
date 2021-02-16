import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { followToggle, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching } from '../../../redux/usersReducer';
import { followUser, getUsers, unfollowUser } from '../../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    onFollow = (userId) => {
        followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.followToggle(userId);
                }
            });
    }

    onUnfollow = (userId) => {
        unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.followToggle(userId);
                }
            })
    }

    render() {
        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onFollow={this.onFollow}
            onUnfollow={this.onUnfollow}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
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
    }
}

export default connect(mapStateToProps, { followToggle, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);
