// Initializers
import { SET_TOKEN, CLEAR_TOKEN } from '../initializers/types';

// Initial state
const initialState = {
    token: ''
}

export default function(state = initialState, action){
    switch (action.type) {
        case SET_TOKEN:
            return action.token;

        case CLEAR_TOKEN:
            return '';

        default:
            return state;
    }
}