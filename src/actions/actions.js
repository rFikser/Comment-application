let nextCommentId = 1;

export const addNewComment = () => {
    return {
        type: 'ADD_COMMENT',
        id: nextCommentId++,
    }
}

export const updateTextArea = (text) => {
    return {
        type: 'UPDATE_TEXT_AREA',
        text
    }
}

export const updateNameArea = (name) => {
    return {
        type: 'UPDATE_NAME_AREA',
        name
    }
}

export const deleteComment = (id) => {
    return {
        type: 'DELETE_COMMENT',
        id
    }
}


export function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e)
    }
}

export function loadToLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) {
            return undefined
        } else {
            return JSON.parse(serializedState)
        }
    } catch (e) {
        console.log(e);
        return undefined;
    }
}