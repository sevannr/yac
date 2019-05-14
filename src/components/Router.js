import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Posts from './Posts';
import Header from './Header';
import NewPost from './NewPost';
import SinglePost from './SinglePost';
import EditPost from './EditPost';
import RouterError from './RouterError';

class Router extends Component {
    // State
    state = {
        posts: []
    }

    render() {
        return (
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route exact path="/" render={() => (<Posts />)} />
                    
                    <Route exact path="/post/:postId" component={SinglePost} />
                    {/* <Route exact path="/post/:postId" render={(props) => {
                        let idPost = props.location.pathname.replace('/post/', '');

                        //console.log ( idPost)
                        // console.log(props.posts);

                        // If there is not post with given id, return error page
                        // if (!this.state.posts[idPost]) {
                        //     return (<RouterError />);
                        // }

                        // If post was found by id, return it
                            // console.log(props);
                        return (
                            <SinglePost idPost={idPost} />
                        )
                    }} /> */}
                    
                    <Route exact path="/post/editar/:id" component={EditPost} />
                    
                    <Route exact path="/newpost" component={NewPost}></Route>
                    
                    <Route component={RouterError}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;