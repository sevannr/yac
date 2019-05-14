import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Actions
import { getPost, deletePost } from '../actions/postsActions';

// Components
import RouterError from './RouterError';

// Styles
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

class SinglePost extends Component {

    state = {
        id: '',
        title: '',
        body: '',
        author: ''
    }

    // Component Did Mount
    componentDidMount() {
        const { postId } = this.props.match.params;

        this.props.getPost(postId);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { id, title, body, author } = nextProps.post;

        this.setState({ id, title, body, author })
    }

    deletePost = (e) => {
        // Prevent to refresh page
        e.preventDefault();

        const id = this.props.post.id;

        // Send petition to delete post action
        this.props.deletePost(id);

        // Redirect
        this.props.history.push('/');
    }

    render() {
        const { title, body, author, id } = this.state;

        // If there is no post with given id, then return Error page
        if (!this.state.id) {
            return <RouterError />;
        }

        return (
            <React.Fragment>
                <div className="card mt-4">
                    <div className="card-header justify-content-between d-flex card-center-vertical">
                        <div>
                            <h2><strong>{title}</strong></h2>
                        </div>
                        <div>
                            <Link to={'/'} className="btn btn-secondary">Back to List</Link>
                            <Link to={`/post/editar/${id}`}> <IconButton > <Edit key={this.state.id} /> </IconButton> </Link>
                            <IconButton color="secondary" onClick={this.deletePost}> <Delete key={this.state.id} /> </IconButton>
                        </div>
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>{`${body}`}</p>
                            <footer className="blockquote-footer">Author <cite title="Source Title">{`${author}`}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// Map state to props
const mapStateToProps = (state) => ({
    post: state.posts.post
})

// Map dispatch to props
const mapDispatchToProps = {
    getPost,
    deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);