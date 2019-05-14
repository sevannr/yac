import React from 'react';

// Styles
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';

const AuthElements = function (props) {
    const loginButton = () => {
        // If there is an user authenticated then show logout option
        if (props.user) {
            return <IconButton color="inherit" onClick={props.logout}> <ExitToApp /> </IconButton>;
        };
        // In other way, show the login button  
        return (<Button variant="contained" onClick={props.login}>Iniciar Sesión</Button>);
    }

    return (
        <React.Fragment>
            {loginButton()}
        </React.Fragment>
    );
}

export default AuthElements;