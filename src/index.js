import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux
import { Provider } from 'react-redux';
// Initializers
import firebase from './initializers/firebase';
// Store
import store from './initializers/store';
// Actions
import { setUser, clearUser } from './initializers/actions';

firebase.auth().onAuthStateChanged((user) => {
    // Check if there is an user authenticated
    if (user) {
        // If there is an user authenticated, change the prop on status
        store.dispatch(setUser(user));
    }
    else {
        // If there is not an user authenticated, change the prop on status
        store.dispatch(clearUser());
    }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
