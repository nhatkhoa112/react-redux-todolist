import { createStore } from "redux";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [
        { id: uuidv4(), text: "Learn Redux", active: "active", tag: "" },
        { id: uuidv4(), text: "Make my teacher proud", active: "active", tag: ""  },
    ],
};
const reducer = (state = initialState, action) => {
    if (action.type === "addTodo") {
        return {
            todos: [...state.todos, { id: uuidv4(), text: action.payload, active: "active", tag: ""  }],
        };
    }
    if (action.type === "REMOVE_TODO") {
        console.log(action.payplad)
        return{
            todos: state.todos.filter(t => t.id !== action.payload )

        }
    }

    return state;
};

const store = createStore(reducer);

export default store;
