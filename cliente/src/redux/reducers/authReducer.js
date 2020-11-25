import {
    CREATE_NEW_USER,
    AUTHENTICATION,
    LOG_OUT
} from "../CONSTANTS";

const authReducer = (state = null, action) => {

    switch (action.type) {

        case CREATE_NEW_USER:
            return action.payload;

        case AUTHENTICATION:
            return action.payload;

        case LOG_OUT:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;