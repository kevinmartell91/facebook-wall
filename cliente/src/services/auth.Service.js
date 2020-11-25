import axios from 'axios';

// const url = 'http://localhost:8080/api/v1/auth';
const url = 'https://facebook-wall-challenge.herokuapp.com/api/v1/auth';

export const signIn = (credentials) => axios.post(`${url}/signin`, credentials);
export const signUp = (credentials) => axios.post(`${url}/signup`, credentials);
