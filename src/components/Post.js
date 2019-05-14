import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, body, author, id } = props.info;

    return (
        <div className="card mt-2 post-width center-content">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h6 className="card-subtitle mb-2 text-muted">By: {author}</h6>
                <p className="card-text">{body}</p>
                <Link to={`/post/${id}`} className="btn btn-primary"> Go to Post </Link>
            </div>
        </div>
    );
}

export default Post;