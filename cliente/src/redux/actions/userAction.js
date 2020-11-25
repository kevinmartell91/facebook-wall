import * as userApi from '../../services/user.service';
import { 
    GET_USER_POSTS,
    CREATE_USER_POST,
    UPDATE_USER_POST,
    DELETE_USER_POST 
} from "../CONSTANTS";

export const getUserPosts = (userId) => async (dispatch) => {

    try {
        const  { data }  = await userApi.getUserPosts(userId);
            dispatch({ type: GET_USER_POSTS , payload: data.data });
    } catch (error) {
            console.log("Error",error);
    }
}

export const createUserPost = (userId, newPost) => async (dispatch) => {

    try {
        const  { data }  = await userApi.createUserPost(userId, newPost);
            dispatch({ type: CREATE_USER_POST , payload: data.data });
    } catch (error) {
        console.log("Error",error);
    }

}

export const updateUserPost = (userId, postId, updatedPost) => async (dispatch) => {

    try {
        const { data } = await userApi.updateUserPost(userId, postId, updatedPost);
        dispatch({ type: UPDATE_USER_POST , payload: data.data });
    } catch (error) {
        console.log("Error", error);
    }

}

export const deleteUserPost = (userId, postId) => async (dispatch) => {

    try {
        await userApi.deleteUserPost(userId, postId);
        dispatch({ type: DELETE_USER_POST , payload: postId });
    } catch (error) {
        console.log("Error", error);
    }

}


