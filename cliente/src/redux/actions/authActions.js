import * as authApi from '../../services/auth.Service';
import { 
    CREATE_NEW_USER,
    AUTHENTICATION,
    LOG_OUT
} from "../CONSTANTS";

export const createUser = (credentials) => async (dispatch) => {
    try {
        const { data }  = await authApi.signUp(credentials);
            dispatch({ type: CREATE_NEW_USER , payload: data });
        } catch (error) {
    }
}

export const authentication = (credentials) => async (dispatch) => {

    try {
        const { data }  = await authApi.signIn(credentials);
            dispatch({ type: AUTHENTICATION , payload: data });
        } catch (error) {
    }
}

export const logout = () =>  (dispatch) => {

    try {
            dispatch({ type: LOG_OUT , payload: null });
        } catch (error) {
    }
}

