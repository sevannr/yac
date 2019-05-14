// Initializers
import { SET_TOKEN, CLEAR_TOKEN, LOGGED_IN, SIGN_OUT } from '../initializers/types';

// Action: Save token
export const saveToken = (token) => {
    return {
        type: SET_TOKEN,
        token
    }
}

// Action: Clear token
export const clearToken = () => {
    return {
        type: CLEAR_TOKEN
    }
}

// Action: Set user
export const setUser = (user) => {
    return {
        type: LOGGED_IN,
        user
    }
}

// Action: Clear user
export const clearUser = () => {
    return {
        type: SIGN_OUT
    }
}