// Initializers
import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from '../initializers/types';


// Initial state
const initialState = {
    posts: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };

        case GET_POST:
            return {
                ...state,
                post: action.payload
            };

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            };

        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };

        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map(
                    post => post.id === action.payload.id
                        ?
                        (post = action.payload)
                        :
                        post
                )
            };

        default:
            return state;
    }
}