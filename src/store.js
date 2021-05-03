import { v4 as uuidv4 } from 'uuid';
import { createStore } from "redux";

const initialState = {
    todos: [
        { id: uuidv4(), text: "Learn Redux", active: false, tag: "" },
        { id: uuidv4(), text: "Make my teacher proud", active: false, tag: ""  },
    ],
};

let idx; 
const reducer = (state = initialState, action) => {
    if (action.type === "addTodo") {
        return {
            todos: [...state.todos, { id: uuidv4(), text: action.payload, active: false, tag: ""  }],
        };
    }
    if (action.type === "REMOVE_TODO") {
        return{
            todos: state.todos.filter(t => t.id !== action.payload )
        };
    }
    if (action.type === "ADD_TAG_TODO") {
        // let newState = {...state};
        // idx = newState.todos.find(t => t.id === action.id);
        // idx.active = action.payload;
        // return newState;
        idx = state.todos.findIndex((todo) => todo.id === action.id);
        state.todos[idx] = { ...state.todos[idx], tag: action.payload }
        return {
            ...state, 
            todos: [...state.todos]
        }
    }
    if (action.type === "ADD_ACTIVE") {
        idx = state.todos.findIndex((todo) => todo.id === action.id);
        state.todos[idx] = { ...state.todos[idx], active: action.payload }
        return {
            ...state, 
            todos: [...state.todos]
        }
    }
    if (action.type === "MARK_ALL") {
        let newState = {...state};
        newState.todos.forEach(t => {
            t.active = true;
        })
        console.log(newState)
        return state;
    }
    if (action.type === "CLEAR_COMPLETE") {
        return{
            todos: state.todos.filter(t => t.active === false )
        };
    }
    if (action.type === "FILTER_ACTIVE") {
        let newState = {todos : state.todos.filter(t => t.active === true)}
        return newState

    }
    if (action.type === "FILTER_UNACTIVE") {
        let newState = {todos : state.todos.filter(t => t.active === false)}
        return newState
    }


    return state;
};

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
