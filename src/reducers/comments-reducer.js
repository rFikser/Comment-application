const initialState = {
    comments: [],
    text: '',
    date: '',
    name: '',
    id: ''
}


const comments = (state= initialState, action) => {

    switch (action.type) {
        case 'ADD_COMMENT': {
            let newComment = {
                id: state.comments.length ? state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
                text: state.text,
                name: state.name,
                date: state.date,
            };
            let stateCopy = {...state};
            stateCopy.comments = [...state.comments];
            stateCopy.comments.push(newComment);
            stateCopy.text = '';
            stateCopy.name = '';
            return stateCopy;
        }
        case 'UPDATE_TEXT_AREA' : {
            let stateCopy = {...state};
            stateCopy.text = action.text;
            return stateCopy;
        }

        case 'UPDATE_NAME_AREA' : {
            let stateCopy = {...state};
            stateCopy.name = action.name;
            return stateCopy;
        }
        case 'DELETE_COMMENT' : {
            return {
                comments: state.comments.filter(comment => comment.id !== action.id)
            }
        }
        default:
            return state;
    }

}


export default comments;