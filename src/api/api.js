import * as axios from 'axios';

export const getUsers = (currentPage, pageSize) => {
    return (
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => response.data)
    );
};

export const followUser = (userId) => {
    return (
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: { "API-KEY": "b1b3d12d-b124-4d30-94fb-f0e6e3e02305" }
        }).then(response => response.data)
    );
}

export const unfollowUser = (userId) => {
    return (
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: { "API-KEY": "b1b3d12d-b124-4d30-94fb-f0e6e3e02305" }
        }).then(response => response.data)
    );
}

export const getSelectedUserProfile = (userId) => {
    return (
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => response.data)
    );
}

export const authenticateMe = () => {
    return (
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => response.data)
    );
}