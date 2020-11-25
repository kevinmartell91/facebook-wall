import axios from 'axios';

// const url = 'http://localhost:8080/api/v1/users';
const url = 'https://facebook-wall-challenge.herokuapp.com/api/v1/users';

export const getUserPosts = (userId) => axios.get(`${url}/${userId}/posts`);
export const createUserPost = (userId , newPost) => axios.post(`${url}/${userId}/posts`, newPost);

export const updateUserPost = (userId, postId , updatedPost) => axios.patch(`${url}/${userId}/posts/${postId}`, updatedPost);
export const deleteUserPost = (userId, postId) => axios.delete(`${url}/${userId}/posts/${postId}`);
