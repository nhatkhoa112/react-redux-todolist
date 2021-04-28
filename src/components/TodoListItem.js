import React, {useState} from "react";
import { useDispatch } from "react-redux";



const TodoListItem = ({ id, text }) => {
    const [selectValue, setSelectVale] = useState('')
    const [active, setActive] = useState(true)
    const dispatch = useDispatch();


    const handleRemoveTodo = () => {
        dispatch({type: "REMOVE_TODO", payload: id})
    }

    return(
        <div className="todo-item"  >
            <div style={{opacity: active ? "1" : "0.2"}} className="todo-item-card">
                <input className="toggle" type="checkbox" value={active} onChange={() => setActive(!active)} />
                <div className="text"> {text} </div>
                <select 
                    value={selectValue} 
                    onChange={(e) => setSelectVale(e.target.value)} 
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
                        onClick={handleRemoveTodo}
                        className="fas fa-times "></i>
                </div>
            </div>
        </div>
    );
};

export default TodoListItem;