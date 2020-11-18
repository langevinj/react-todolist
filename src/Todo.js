import React from 'react'
import './Todo.css'

function Todo({id, task, handleRemove}) {
    const remove = () => handleRemove(id);
    return (
        <li className="Todo-item">
            <div className="Todo-task">{task}</div>
            <button onClick={remove} clasName="Todo-remove">X</button>
        </li>
    );   
}

export default Todo;