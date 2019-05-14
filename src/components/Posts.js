import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { getPosts } from '../actions/postsActions';

// Components
import Post from './Post';

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        // Get the posts from state
        const { posts } = this.props;

        // Create a posts list
        const postsList = (Object.keys(posts).map(post => (
            <Post
                info={posts[post]}
                key={post} />
        )));

        return (
            <React.Fragment >
                <h1>Post list
                <Link to={`/newpost`} className="btn btn-success ml-4"> New Post </Link> </h1>
                <div className="mt-4">{postsList}</div>
            </React.Fragment>);
    }
}

// Map state to props
const mapStateToProps = (state) => ({
    posts: state.posts.posts
})

// Map dispatch to props
const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);