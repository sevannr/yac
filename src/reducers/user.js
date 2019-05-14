// Initializers
import { LOGGED_IN, SIGN_OUT } from '../initializers/types';

// Initial state
const initialState = {
    user: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case LOGGED_IN:
            return action.user;

        case SIGN_OUT:
            return '';

        default:
            return state;
    }
}