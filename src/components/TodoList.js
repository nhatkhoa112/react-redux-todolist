import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "./TodoListItem";
import { useDispatch } from "react-redux";
import { clearAllComplete, 
        markAllComplete, 
        filterActive, 
        filterUnactive,
        filterAll,
        filterAllColor,
        filterRed,
        filterBlue,
        filterGreen,
        filterOrange,
        filterPurple
    } from '../redux/actions';

// const selectTodos = (state) => state.todos;
const TodoList = () => {
const dispatch = useDispatch();
let todos = useSelector(state=>state.todos);
let todosFilterByStatus = useSelector(state => state.filterByStatus);
let todosFilterByTagColor = useSelector(state => state.filterByTagColor);

let todoAll = todosFilterByTagColor.all || todosFilterByTagColor.green || todosFilterByTagColor.blue || todosFilterByTagColor.orange || todosFilterByTagColor.red || todosFilterByTagColor.purple || todosFilterByStatus.all || todosFilterByStatus.active || todosFilterByStatus.unActive || todos



return (
    <div className="todo-list-form">
        <ul className="todo-list">
            {todoAll.map((todo) => (
                <TodoListItem key={todo.id}  todo={todo} />
            ))}
        </ul>
        <div className="filter-form">
            <div className="actions">
                <h5>Actions</h5> 
                <button 
                    onClick={() => dispatch(markAllComplete())}
                    className="all-complete">Mark All Completed</button>
                <button 
                    onClick={() => dispatch(clearAllComplete())}
                    className="all-complete">Clear Completed</button>
            </div>
            <div className="filter-status">
                <h5>Filter by Status</h5> 
                <button
                    onClick={() => dispatch(filterAll())}
                    className="sort">All </button>
                <button 
                    onClick={() => dispatch(filterActive())}
                    className="sort">Complete </button>
                <button 
                    onClick={() => dispatch(filterUnactive())}
                    className="sort">On working </button>

            </div>
            <div className="filter-color-tag">
                <h5>Filter by Color</h5> 
                <button
                    onClick={() => dispatch(filterAllColor())}
                    className="sort white">All </button>
                <button
                    onClick={() => dispatch(filterGreen())}
                    className="sort green">Green </button>
                <button
                    onClick={() => dispatch(filterBlue())}
                    className="sort blue">Blue </button>
                <button
                    onClick={() => dispatch(filterRed())}
                    className="sort red">Red </button>
                <button
                    onClick={() => dispatch(filterPurple())}
                    className="sort purple">Purple </button>
                <button
                    onClick={() => dispatch(filterOrange())}
                    className="sort orange">Orange </button>
            </div>
        </div>
    </div> 

    );
};

export default TodoList;
