import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";

const selectTodos = (state) => state.todos;

const TodoList = () => {
const todos = useSelector(selectTodos);
console.log(todos)

return (
    <div class="todo-list-form">
        <ul className="todo-list">
            {todos.map((todo) => (
                <TodoListItem key={todo.id} id={todo.id} text={todo.text} />
            ))}
        </ul>
        <div className="filter-form">
            <div className="actions">
                <h5>Actions</h5> 
                <button className="all-complete">Mark All Completed</button>
                <button className="all-complete">Clear Completed</button>
            </div>
            <div className="filter-status">
                <h5>Filter by Status</h5> 
                <button className="sort">All </button>
                <button className="sort">Active </button>
                <button className="sort">Un Active </button>

            </div>
            <div className="filter-color-tag">
                <h5>Filter by Color</h5> 
                
            </div>
        </div>
    </div> 

    );
};

export default TodoList;
