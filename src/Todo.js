import React from 'react'

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