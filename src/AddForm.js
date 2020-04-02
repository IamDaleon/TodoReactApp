import React, { Component } from 'react';

class Addtodo extends Component {
    state = {
        content: ''
    }
    changeHanlder = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    submissionHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.submissionHandler}>
                    <label>Add new todo:  </label><br />
                    <input type = "text" onChange = {this.changeHanlder}  value ={this.state.content} />  
                </form>
            </div>
        )
    }
}
export default Addtodo;