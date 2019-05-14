import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { addPost } from '../actions/postsActions';

class NewPost extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        error: false
    }

    // Update state if title changes
    titlePost = (e) => {
        this.setState({ title: e.target.value });
    }

    // Update state if body changes
    bodyPost = (e) => {
        this.setState({ body: e.target.value });
    }

    // Update state if author changes
    authorPost = (e) => {
        this.setState({ author: e.target.value });
    }

    // Function to submit a new post
    handleSubmit = (e) => {
        // Prevent refresh of page
        e.preventDefault();

        const { title, body, author } = this.state;

        // Validations of fields
        if (title === '' || body === '' || author === '') {
            this.setState({ error: true });

            return;
        }

        const infoPost = {
            title,
            body,
            author
        }

        // Send post to function to manager
        this.props.addPost(infoPost);

        // Turn false state error if it is true
        this.setState({ error: false });

        // Redirect
        this.props.history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} className="form-group mt-4">
                    Add a new Post
                    <input
                        type="text"
                        className="form-control mt-2"
                        id="title"
                        placeholder="Put the title post here..."
                        onChange={this.titlePost}
                        name="title" />

                    <textarea
                        name="body"
                        className="form-control mt-2"
                        onChange={this.bodyPost}
                        placeholder="Put the body post here"></textarea>

                    <input
                        type="text"
                        className="form-control mt-2"
                        id="author"
                        placeholder="Put the author of the post here..."
                        onChange={this.authorPost}
                        name="author" />

                    <button className="btn btn-primary mt-4"> Send </button>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(null, { addPost })(NewPost);