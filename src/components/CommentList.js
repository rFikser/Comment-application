import React from "react";
import '../index.css'

const CommentList = (props) => {

    const {comments} = props;

    let deleteComment = (id) => {
        props.ddeleteComment(id);
    }



    let commentElement = comments.map((comment) => {

        return (
            <div className='comment-section'>
                <div className='comment'>
                    <span className="name">{comment.name}</span>
                    <span className="comment-date">{new Date().toLocaleString()}</span>
                    <div className="comment-text">{comment.text}</div>
                </div>
                <div className="delete-button">
                    <button type="submit"
                            className='delete-button btn btn-primary'
                            onClick={() => deleteComment(comment.id)}>Delete
                    </button>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="main-title text-center">Comment Application on React</div>
            <div className="comment-list">
                {commentElement}
            </div>
        </div>
    );
}

export default CommentList;