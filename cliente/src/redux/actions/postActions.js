import * as apiPost from '../../services/post.service'
import { FETCH_ALL_POST, SET_CURRENT_POST_ID } from "../CONSTANTS";

export const getPosts = () => async (dispatch) => {

     try {
        const { data } = await apiPost.fetchPosts();
            dispatch({ type: FETCH_ALL_POST, payload: data.data });
        } catch (error) {
     }
}

export const setCurrentPostId = (currentPostId ) => (dispatch) => {
    dispatch( {type: SET_CURRENT_POST_ID, payload: currentPostId});
}

