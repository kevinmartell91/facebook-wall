import axios from 'axios';
import config from "../config";

let url = `${config.URL_PATH}/auth`;
if( process.env.REACT_APP_STAGE === "prod"){
    url = `${config.URL_PATH}/auth`;
}

export const signIn = (credentials) => axios.post(`${url}/signin`, credentials);
export const signUp = (credentials) => axios.post(`${url}/signup`, credentials);
