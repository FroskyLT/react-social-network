import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "b1b3d12d-b124-4d30-94fb-f0e6e3e02305" },
});

export const AuthAPI = {
  authenticateMe() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email, password, captcha = null) {
    return instance
      .post("auth/login", {
        email,
        password,
        captcha,
      })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete("auth/login").then((response) => response.data);
  },
};

export const SecurityAPI = {
  getCaptcha() {
    return instance
      .get("security/get-captcha-url")
      .then((response) => response.data);
  },
};

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  getFollowedUsers() {
    return instance
      .get("users?count=100&friend=true")
      .then((response) => response.data);
  },
  getUserInfo(userName) {
    return instance
      .get(`users?term=${userName}`)
      .then((response) => response.data);
  },
};

export const ProfileAPI = {
  getSelectedUserProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  getCurrentUserStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  updateCurrentUserStatus(newStatus) {
    return instance
      .put("profile/status", {
        status: newStatus,
      })
      .then((response) => response.data);
  },
  saveImage(imageFile) {
    const formData = new FormData();
    formData.append("image", imageFile);

    return instance
      .put("profile/photo", formData)
      .then((response) => response.data);
  },
  updateProfile(profile) {
    return instance.put("profile", profile).then((response) => response.data);
  },
};

export const FollowAPI = {
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  checkIsFollowingUser(userId) {
    return instance.get(`follow/${userId}`).then((response) => response.data);
  },
};
