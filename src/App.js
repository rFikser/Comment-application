import React from "react";
import Comment from "./Comment.js";



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            text: '',
            date: '',
            name: ''

        }
        this.addComment = this.addComment.bind(this);

    }

    componentDidMount() {
        if (localStorage.getItem('state')) {
            this.setState({...JSON.parse(localStorage.getItem('state'))})
        }
    }


    getCurrentDate(separator=''){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        var hour = newDate.getHours();
        var minute = ((newDate.getMinutes() < 10) ? '0' : '') + newDate.getMinutes();
        var sec = ((newDate.getSeconds() < 10) ? '0' : '') + newDate.getSeconds();
        return `Дата: ${date}/${month}/${year}. Время: ${hour}:${minute}:${sec}`

    }

    addComment(e) {

        e.preventDefault();
        const comments = this.state.comments;
        comments.push({
            name: this.state.name,
            text: this.state.text,
            date: this.getCurrentDate(),
            id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1
        })
        this.setState({
            comments,
            text: '',
            name: ''
        }, () => localStorage.setItem('state', JSON.stringify(this.state)));

    }


    deleteComment = (id) => {
        this.setState({
            comments: this.state.comments.filter(comment => comment.id !== id)
        },() => localStorage.setItem('state', JSON.stringify(this.state)));
    }

    render() {
        return (
            <div className='container'>
                <div className="main-title text-center">Comment Application on React</div>
                <div className="comment-list">
                    <Comment comments={this.state.comments} deleteComment={this.deleteComment}/>
                </div>
                <div className="Comment-form">
                    <div className="input-name">
                        <input className=' input-name-form form-control' type="text"
                               placeholder='Your name'
                               value={this.state.name}
                               onChange={ev => {
                                   this.setState({name: ev.target.value})
                               }}
                        />
                    </div>
                    <div className="input-text">
                        <textarea className='form-control' aria-label='with textarea'
                                  placeholder='Your comment'
                                  value={this.state.text}
                                  onChange={ev => {
                                      this.setState({text: ev.target.value})
                                  }}
                        />
                        <button className='btn btn-primary'
                                type='submit'
                                onClick={this.addComment}>Send
                        </button>
                    </div>

                </div>
            </div>
        )
    }
}

export default App;