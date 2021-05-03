import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';


const Header = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => setText(e.target.value);

    const handleKeyDown = (e) => {
        // If the user pressed the Enter key:
        const trimmedText = text.trim();
        if (e.which === 13 && trimmedText) {
            dispatch(  addTodo({
                        id: uuidv4(),
                        text: text,
                        status: false,
                        tag: ""
                    }));
            setText("");
        }
    };

    return (
        <header className="header">
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={text}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </header>
    );
};

export default Header;