import authReducer from './reducers/authReducer';
import postReducer from './reducers/postReducer';
import userReducer from './reducers/userReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    post: postReducer,
    user: userReducer
})

export default rootReducer;
