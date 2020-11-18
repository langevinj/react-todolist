import React, { useState } from 'react'
import './NewTodoForm.css'
import {v4 as uuid} from "uuid"

function NewTodoForm({createTodo}) {
    const [formData, setFormData] = useState({
        task: ""
    });

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            [name]: value
        }));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        createTodo({...formData, id: uuid()});
        setFormData({task: ""});
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="NewTodoForm"> 
                <div>
                    <label htmlFor="task" className="NewTaskLabel">New Task:</label>
                    <textarea
                        onChange={handleChange}
                        id="task"
                        name="task"
                        type="text"
                        value={formData.task}
                        cols="20"
                        rows="5"
                    >
                    </textarea>
                </div>
                <button id="newTodoButton">Add to the todo list!</button>
            </form>
        </div>
    );
}


export default NewTodoForm;