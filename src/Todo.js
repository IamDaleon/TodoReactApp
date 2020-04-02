import React from 'react';
import {Card , CardColumns} from 'react-bootstrap';

const Todo = ({todos, delTodo}) =>{

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <Card>
                    <Card.Body>
                        <Card.Title key={todo.id}>
                                    <Card.Body className= "container text-center" onClick={() => {delTodo(todo.id)}}>{todo.content}</Card.Body>
                        </Card.Title>
                    </Card.Body>
                </Card>
            )
        })
    ) : (
                <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            Well I guess you can retire for the day. 
                                <br />
                                Since, you have nothing left on the to do List.
                        </Card.Text>
                    </Card.Body>
                </Card>
    )
    return (
        <CardColumns className="container text-center">
            {todoList}
        </CardColumns>
    )
}

export default Todo;