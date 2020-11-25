import axios from 'axios';

// const url = 'http://localhost:8080/api/v1/posts';
const url = 'https://facebook-wall-challenge.herokuapp.com/api/v1/posts';

export const fetchPosts = () => axios.get(url);
