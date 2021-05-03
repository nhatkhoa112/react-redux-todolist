import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {deleteTodo, addTag, addStatus, updateTodo} from '../redux/actions';
// import { useSelector } from "react-redux";


// const selectTodos = (state) => state.todos;

const TodoListItem = ({ todo }) => {
    // const todos = useSelector(selectTodos);
    const [selectValue, setSelectVale] = useState('');
    const [editable, setEditable] = useState(false);
    const [text, setText] = useState(todo.text)
    // const newTodo = todos.find(t => t.id === todo.id );
    const [status, setStatus] = useState(todo.status);
    const dispatch = useDispatch();
    
    

    const handleChangeTag = (e) => {
        e.preventDefault();
        setSelectVale(e.target.value);
        dispatch(addTag(todo.id, e.target.value))
    }

    const handleChangeStatus = () => {
        setStatus(!status);
        dispatch(addStatus(todo.id, !status))
    }

    return(
        <div className="todo-item"  >
            <div style={{opacity: status ? "0.2" : "1", background: `${todo.tag}` || `${selectValue}`  || "rgba(25, 10, 233, 0.4)"}} className="todo-item-card">
                <input className="toggle" type="checkbox" value={status}  onChange={handleChangeStatus} />
                <div className="text"> 
                    {editable ?
                        <input type="text" className="form-control"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.text}</h4>
                    }
                </div>
                <select 
                    value={todo.tag || selectValue  } 
                    onChange={handleChangeTag} 
                    style={{color: `${selectValue}` }}
                    className="colorPicker"  >
                    <option value=""></option>
                    <option className="color-green" value="green"> Green </option>
                    <option className="color-blue" value="blue">Blue</option>
                    <option className="color-orange" value="orange"> Orange</option>
                    <option className="color-purple" value="purple"> Purple</option>
                    <option className="color-red" value="red"> Red</option>
                </select>
                <div className="close-btn">
                    <i 
                        onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            text: text
                        }))
                        if(editable) {
                            setText(todo.text);   
                        }
                        setEditable(!editable);
    

                    }}
                        className={ editable ? "fas fa-edit" : "fas fa-pen"}></i>
                    <i 
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="fas fa-times "></i>
                </div>
            </div>
        </div>
    );
};

export default TodoListItem;