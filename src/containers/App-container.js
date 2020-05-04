import React from "react";

import {connect} from 'react-redux';

import CommentList from '../components/CommentList'
import AddComment from '../components/AddComment'

import {addNewComment, updateTextArea, updateNameArea, deleteComment} from "../actions/actions";


let AppContainer = (props) => {

    const {
        comments
    } = props;

    return (
        <div className='container'>
            <CommentList comments={comments}
                         date={props.date}
                         ddeleteComment={props.deleteComment}
            />
            <AddComment UpdateText={props.onUpdateText}
                        AddComment={props.onAddComment}
                        UpdateNameArea={props.onUpdateNameArea}
            />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        text: state.text,
        name: state.name,
        id: state.id
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAddComment: () => {
            dispatch(addNewComment())
        },
        onUpdateText: (text) => {
            dispatch(updateTextArea(text))
        },
        onUpdateNameArea: (name) => {
            dispatch(updateNameArea(name))
        },
        deleteComment: (id) => {
            dispatch(deleteComment(id))
        },
    }
}

AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default AppContainer;
