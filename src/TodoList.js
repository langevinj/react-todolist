import React, { useState } from 'react'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const add = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoComponents = todos.map(todo => (
        <Todo id={todo.id} task={todo.task} handleRemove={remove}/>
    ));

    return (
        <div className="mainbody">
            <NewTodoForm createTodo={add}/>
            <div>
                <h2 className="TodoList-title">My Todo List:</h2>
            </div>
            <ul className="Todolist">
                {todoComponents}
            </ul>
        </div>
    )
}


export default TodoList;