import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import Todo from './Todo';
import FormSub from './AddForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  state = {
    todos : [
      {id:1, content: 'Make Dinner'},
      {id:2, content: 'Play some board games'},
      {id:3, content: 'Celebrate the end of Covid-19'}
    ]
  }

  delTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  } 

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="text-center">
        <h1> làm App <Badge pill variant="secondary">New</Badge> </h1>
        <Todo todos = {this.state.todos} delTodo={this.delTodo} />
        <FormSub addTodo={this.addTodo}/>

      </div>
    );
  }
}

export default App;
