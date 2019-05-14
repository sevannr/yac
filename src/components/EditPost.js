import React, { Component } from 'react';

// Redux 
import { connect } from 'react-redux';
import { getPost, editPost } from '../actions/postsActions'; 


class EditPost extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        id: '',
        error: false
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        this.props.getPost(id);
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { title, body, author, id } = nextProps.post;

        this.setState({ title, body, author, id });
    }

    titlePost = (e) => {
        this.setState({ title: e.target.value });
    }

    bodyPost = (e) => {
        this.setState({ body: e.target.value });
    }

    authorPost = (e) => {
        this.setState({ author: e.target.value });
    }

    // updatePost = (e) => {
    //     // Prevent to refresh page
    //     e.preventDefault();

    //     // Making the fields to the object
    //     const { title, body, author, id } = this.state;

    //     // Checking if there is not empty fields 
    //     if (title === '' || body === '' || author === '') {
    //         // If any fields is empty, change error to true
    //         this.setState({ error: true });

    //         return;
    //     }

    //     // Making the object
    //     const infoPost = {
    //         title,
    //         body,
    //         author,
    //         id
    //     }

    //     // Update the post
    //     this.props.editPost(infoPost);

    //     // Remove error message if exists
    //     this.setState({ error: false });

    //     // Redirect
    //     this.props.history.push('/');
    // }

      
    render() {
        const { error, title, body, author } = this.state;
        
        const validatePostInfo = (e)=>{

            
            e.preventDefault();

            let title = document.getElementById('title').value;
           // console.log(title);

                if(!title.trim())
                console.log('vacio' + title);
                else
                console.log('lleno' + title);
            
        }
        
        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Edit Post</h2>
                            <form onSubmit={validatePostInfo}>
                                <div className="form-group">
                                    <label htmlFor="title" className="float-left">Title</label>
                                    <input name="title" id="title" onChange={this.titlePost} type="text" className="form-control" defaultValue={title} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="body" className="float-left">Body</label>                                    
                                    <textarea name="body" id="body" onChange={this.bodyPost} className="form-control" value={body}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author" className="float-left">Author</label>
                                    <input name="author" id="author" onChange={this.authorPost} type="text" className="form-control" defaultValue={author} />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Send</button>
                            </form>

                            {error ?
                                <div className="font-weight-bold alert alert-danger text-center mt-4">
                                    All fields are required
                            </div>
                                :
                                ''}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Map state to props
const mapStateToProps = state => ({
    post: state.posts.post
})

// Map dispatch to props
const mapDispatchToProps = {
    getPost,
    editPost
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);