import {
    GET_USER_POSTS,
    CREATE_USER_POST,
    UPDATE_USER_POST,
    DELETE_USER_POST
} from "../CONSTANTS";


const initState = {
    posts: []
}

const userReducer = (state = initState, action) => {

    switch (action.type) {

        case GET_USER_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case CREATE_USER_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            };

        case UPDATE_USER_POST:
            return {
                ...state,
                posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post)
            };

        // TODO    
        case DELETE_USER_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== action.payload)
            };

        default:
            // GET_USER_POST_STATE
            return state;
    }
}
export default userReducer;