import React from 'react'
import './Todo.css'
import EditTodoForm from './EditTodoForm'

function Todo({id, task, handleRemove, handleToggle, handleEdit}) {
    const remove = () => handleRemove(id);
    const toggle = (evt) => handleToggle(evt);

    return (
        <li className="Todo-item">
            <div className="Todo-task">{task}</div>
            <button onClick={remove} className="Todo-remove" data-testid="remove-todo">X</button>
            <button onClick={toggle} className="Todo-edit" data-testid="edit-todo">edit</button>
            <EditTodoForm editTodo={handleEdit} task={task} id={id} toggleForm={toggle}/>
        </li>
    );   
}

export default Todo;