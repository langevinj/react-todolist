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
        <div>
            <NewTodoForm createTodo={add}/>
            <ul className="Todolist">
                {todoComponents}
            </ul>
        </div>
    )
}


export default TodoList;