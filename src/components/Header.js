import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

// Components
import Login from '../containers/Login';

class Header extends Component {

    render() {
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar className={this.props.classes.nav}>
                        <Typography variant="h6" component="h1" className={this.props.classes.grow}>
                    <Link to={'/'} className={this.props.classes.link}>
                            Posts with Selectors, Inmutables and Sagas
                    </Link>
                        </Typography>
                        <Login />
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        );
    }
}

export default withStyles({
    grow: {
        flexGrow: 1,
        textAlign: 'left',
        color: 'white'
    },
    nav: {
        color: 'white'
    },
    link: {
        color: 'white',
        '&:hover': {
            color: 'white'
        }
    }
})(Header);