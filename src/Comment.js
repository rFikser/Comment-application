import React from "react";
import './index.css'



function Comment(props) {
    const comments = props.comments;
    const listComments = comments.map(comment => {
        return (
            <div className='comment-section'>
                <div className='comment'>
                    <span className="name">{comment.name}</span>
                    <span className="comment-date">{comment.date}</span>
                    <div className="comment-text">{comment.text}</div>
                </div>
                <div className="delete-button">
                    <button type="submit" className='delete-button btn btn-primary'
                            onClick={props.deleteComment.bind(null, comment.id)}>Delete
                    </button>
                </div>
            </div>
        )
    })

    return (
        <div>{listComments}</div>
    )
}

export default Comment;