import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Initializers
import firebase from '../initializers/firebase';
import { saveToken, clearToken } from '../initializers/actions';

// Componens
import AuthElements from '../components/AuthElements';

class Login extends Component {
    constructor(props) {
        super(props);

        // Binds
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    // Login function
    login() {
        // Provider
        let provider = new firebase.auth.GoogleAuthProvider();

        // Authentication with firebase
        firebase.auth().signInWithPopup(provider).then(result => {
            // Token
            let token = result.credential.accessToken;

            // Save token
            this.props.saveToken(token);
        }).catch(err => {
            console.log(err);
        })
    }

    // Logout function
    logout() {
        firebase.auth().signOut().then(console.log());

        // Clear token
        this.props.clearToken();
    }

    render() {
        return (
            <AuthElements
                login={this.login}
                logout={this.logout}
                token={this.props.token}
                user={this.props.user} />
        );
    }
}

// Map state to props
const mapStateToProps = (state) => {
    return {
        token: state.token,
        user: state.user
    }
}

// Map dispatch to props
const mapDispatchToProps = {
    saveToken,
    clearToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);