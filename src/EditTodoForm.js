import React, { useState } from 'react';

function EditTodoForm({editTodo, task, id, toggleForm}) {
    const [formData, setFormData] = useState({
        task: task,
        id: id
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        toggleForm(evt);
        editTodo({...formData});
    };

    return(
        <div style={{ display: "none" }} key={`edit-${id}`} className="Edit-div">
            <form onSubmit={handleSubmit} className="EditTodoForm">
                <div>
                    <label htmlFor="task" className="EditTaskLabel">Edit Task:</label>
                    <textarea 
                        onChange={handleChange}
                        id="task"
                        name="task"
                        type="text"
                        value={formData.task}
                        cols="20"
                        rows="5"
                    ></textarea>
                </div>
                <button id="editTodoButton">Edit this task!</button>
            </form>
        </div>
    )
}

export default EditTodoForm;