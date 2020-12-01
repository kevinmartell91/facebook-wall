import axios from 'axios';
import config from "../config";

let url = `${config.URL_PATH}/users`;
if( process.env.REACT_APP_STAGE === "prod"){
    url = `${config.URL_PATH}/users`;
}

export const getUserPosts = (userId) => axios.get(`${url}/${userId}/posts`);
export const createUserPost = (userId, newPost) => axios.post(`${url}/${userId}/posts`, newPost);

export const updateUserPost = (userId, postId, updatedPost) => axios.patch(`${url}/${userId}/posts/${postId}`, updatedPost);
export const deleteUserPost = (userId, postId) => axios.delete(`${url}/${userId}/posts/${postId}`);
