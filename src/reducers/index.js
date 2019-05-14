import { combineReducers } from 'redux';
import token from './token';
import user from './user';
import posts from './postsReducer';
// import {getPosts} from './postsReducer';

export default combineReducers({
    token,
    user,
    posts
    // getPosts,
    // getPost
})