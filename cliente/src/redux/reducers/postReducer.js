import { FETCH_ALL_POST, SET_CURRENT_POST_ID } from "../CONSTANTS";

const initState = {
    currentPostId: null
}
const postReducer = (posts = initState, action) => {

    switch (action.type) {
        case FETCH_ALL_POST:
            return action.payload;

        case SET_CURRENT_POST_ID:
            return {
                ...posts,
                currentPostId: action.payload
            };

        default:
            return posts;
    }
}

export default postReducer;