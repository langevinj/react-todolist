import React, { useState } from 'react'
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'

let loadedTodos =[];

//set the todos from local storage
window.onload = (event) => {
    loadedTodos = JSON.parse(window.localStorage.getItem('tasks'));
}

const TodoList = () => {
    //load the current todos
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('tasks')))

    const add = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const edit = (targetTodo) => (
        setTodos(todos.map(todo => editCorrect(todo, targetTodo))
    ));

    const check = id => {
        setTodos(todos.map(todo => checkIfComplete(todo, id)))
    }

    //check a newly completed todo
    function checkIfComplete(todo, id){
        if(todo.id === id){
            let copyTodo = Object.assign({}, todo)
            copyTodo.completed = true
            return copyTodo
        }
        return todo
    }

    //togglethe edit form visibility
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
        <Todo id={todo.id} task={todo.task} handleRemove={remove} handleToggle={toggleEditForm} handleEdit={edit} key={todo.id} handleCheck={check}  completed={todo.completed}/>
    ));
    
    //before page refresh, save the current todos to local storage
    window.onbeforeunload = () => {
        window.localStorage.setItem('tasks', JSON.stringify(todos))
    }

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