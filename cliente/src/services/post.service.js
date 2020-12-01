import axios from 'axios';
import config from "../config";

let url = `${config.URL_PATH}/posts`;
if( process.env.REACT_APP_STAGE === "prod"){
    url = `${config.URL_PATH}/posts`;
}

export const fetchPosts = () => axios.get(url);
