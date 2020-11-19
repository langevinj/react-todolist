import React, { useState } from 'react'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const add = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const edit = (targetTodo) => (
        setTodos(todos.map(todo => editCorrect(todo, targetTodo))
    ));

    //make the edit form for the element visible
    function toggleEditForm(evt) {
        if(evt.target.parentNode.className === "Todo-item"){
            if (evt.target.parentNode.lastChild.style.display === "none") {
                evt.target.parentNode.lastChild.style.display = "block"
            } else {
                evt.target.parentNode.lastChild.style.display = "none"
            }
        } else {
            if (evt.target.parentNode.style.display === "none") {
                evt.target.parentNode.style.display = "block"
            } else {
                evt.target.parentNode.style.display = "none"
            }
        }
        
        
    }

    //edit the targetted todo
    function editCorrect (todo, targetTodo){
        if(todo.id === targetTodo.id){
            let copyTodo = Object.assign({}, todo)
            copyTodo.task = targetTodo.task
            return copyTodo
        }
        return todo
    }

    

    const todoComponents = todos.map(todo => (
        <Todo id={todo.id} task={todo.task} handleRemove={remove} handleToggle={toggleEditForm} handleEdit={edit} key={todo.id}/>
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