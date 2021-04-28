import { createStore } from "redux";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [
        { id: uuidv4(), text: "Learn Redux", active: false, tag: "" },
        { id: uuidv4(), text: "Make my teacher proud", active: false, tag: ""  },
    ],
};
const reducer = (state = initialState, action) => {
    if (action.type === "addTodo") {
        return {
            todos: [...state.todos, { id: uuidv4(), text: action.payload, active: "active", tag: ""  }],
        };
    }
    if (action.type === "REMOVE_TODO") {
        return{
            todos: state.todos.filter(t => t.id !== action.payload )
        };
    }
    if (action.type === "ADD_SELECT_OPTION") {
        state.todos.find(t => t.id === action.id).tag = action.payload;
        return state;
    }
    if (action.type === "ADD_ACTIVE") {
        state.todos.find(t => t.id === action.id).active = action.payload;
        return state;
    }

    return state;
};

const store = createStore(reducer);

export default store;
