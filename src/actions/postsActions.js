// Initializers
import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from '../initializers/types';
import axios from 'axios';

// Action: Get all posts
export const getPosts = () => async dispatch => {
    const response = await axios.get(`http://localhost:5000/posts/`);
    dispatch({
        type: GET_POSTS,
        payload: response.data.reverse()
    })
}

// Action: Get a single post
export const getPost = (idPost) => async dispatch => {  
    const response = await axios.get(`http://localhost:5000/posts/${idPost}`);
    
    dispatch({
        type: GET_POST,
        payload: response.data
    })
}

// Action: Post a new post
export const addPost = post => async dispatch => {
    const response = await axios.post('http://localhost:5000/posts/', post);
    dispatch({
        type: ADD_POST,
        payload: response.data
    })
}

// Action: Delete a post
export const deletePost = id => async dispatch => {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    dispatch({
        type: DELETE_POST,
        payload: id
    })
}

// Action: Edit a post
export const editPost = post => async dispatch => {
    const response = await axios.put(`http://localhost:5000/posts/${post.id}`, post);
    dispatch({
        type: EDIT_POST,
        payload: response.data
    })
}