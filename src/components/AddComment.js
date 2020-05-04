import React from "react";
import '../index.css'

const addComment = (props) => {


    let newName = React.createRef();
    let newText = React.createRef();


    let onUpdateNameArea = () => {
        let name = newName.current.value;
        props.UpdateNameArea(name);
    }

    let onUpdateTextArea = () => {
        let text = newText.current.value;
        props.UpdateText(text)
    }

    let onAddComment = () => {
        props.AddComment();
        newName.current.value = '';
        newText.current.value = '';
    }

    return (
        <div className="Comment-form">
            <div className="input-name">
                <input className=' input-name-form form-control' type="text"
                       ref={newName}
                       placeholder='Your name'
                       onChange={onUpdateNameArea}
                />
            </div>
            <div className="input-text">
                        <textarea className='form-control' aria-label='with textarea'
                                  ref={newText}
                                  placeholder='Your comment'
                                  onChange={onUpdateTextArea}
                        />
                <button className='btn btn-primary'
                        type='submit'
                        onClick={onAddComment}>Send
                </button>
            </div>
        </div>
    )
}

export default addComment;