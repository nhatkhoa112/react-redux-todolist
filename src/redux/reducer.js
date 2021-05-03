
import { ADD_TODO, 
        DELETE_TODO, 
        ADD_TAG, 
        ADD_STATUS,
        CLEAR_ALL_COMPLETE,
        MARK_ALL_COMPLETE,
        UPDATE_TODO,
        FILTER_ACTIVE,
        FILTER_UNACTIVE,
        FILTER_ALL,
        FILTER_WHITE,
        FILTER_GREEN,
        FILTER_BLUE,
        FILTER_RED,
        FILTER_ORANGE,
        FILTER_PURPLE
    } from './actions';
import { initialState } from './states';


export let reducer = (state = initialState, action) => {
    let idx;
    let newState;
    let t;

    switch (action.type) {
        case FILTER_WHITE: 
            newState = {...state};
            t = newState.todos;
            newState.filterByTagColor.all = t;
            newState.filterByTagColor.red = newState.filterByTagColor.green = newState.filterByTagColor.blue = newState.filterByTagColor.orange = newState.filterByTagColor.purple = null;
            return {...newState, filterByTagColor: {...newState.filterByTagColor}};
        case FILTER_GREEN: 
            newState = {...state};
            t = newState.todos.filter(todo => todo.tag === "green");
            newState.filterByTagColor.green = t;
            newState.filterByTagColor.red = newState.filterByTagColor.all = newState.filterByTagColor.blue = newState.filterByTagColor.orange = newState.filterByTagColor.purple = null;
            return {...newState, filterByTagColor: {...newState.filterByTagColor}};
        case FILTER_BLUE: 
            newState = {...state};
            t = newState.todos.filter(todo => todo.tag === "blue");
            newState.filterByTagColor.blue = t ;
            newState.filterByTagColor.red = newState.filterByTagColor.green = newState.filterByTagColor.all = newState.filterByTagColor.orange = newState.filterByTagColor.purple = null;
            return {...newState, filterByTagColor: {...newState.filterByTagColor}};
        case FILTER_RED: 
            newState = {...state};
            t = newState.todos.filter(todo => todo.tag === "red");
            newState.filterByTagColor.red = t;
            newState.filterByTagColor.all = newState.filterByTagColor.green = newState.filterByTagColor.blue = newState.filterByTagColor.orange = newState.filterByTagColor.purple = null;
            return {...newState, filterByTagColor: {...newState.filterByTagColor}};
        case FILTER_ORANGE: 
            newState = {...state};
            t = newState.todos.filter(todo => todo.tag === "orange");
            newState.filterByTagColor.orange = t;
            newState.filterByTagColor.red = newState.filterByTagColor.green = newState.filterByTagColor.blue = newState.filterByTagColor.all = newState.filterByTagColor.purple = null;
            return {...newState, filterByTagColor: {...newState.filterByTagColor}};
        case FILTER_PURPLE: 
            newState = {...state};
            t = newState.todos.filter(todo => todo.tag === "purple");
            newState.filterByTagColor.purple = t;
            newState.filterByTagColor.red = newState.filterByTagColor.green = newState.filterByTagColor.blue = newState.filterByTagColor.orange = newState.filterByTagColor.all = null;
            return {...newState, filterByTagColor: {...newState.filterByTagColor}};
        case FILTER_ALL:
            newState = {...state};
            t = newState.todos;
            newState.filterByStatus.all = t;
            newState.filterByStatus.unActive  = null;
            newState.filterByStatus.unActive = null
            return {...newState, filterByStatus: {...newState.filterByStatus}};

        case FILTER_ACTIVE:
            newState = {...state};
            t = newState.todos.filter(todo => todo.status === true);
            newState.filterByStatus.active = t;
            newState.filterByStatus.unActive  = null;
            newState.filterByStatus.all = null;
            console.log(newState)
            return {...newState, filterByStatus: {...newState.filterByStatus}};
            
        case FILTER_UNACTIVE:
            newState = {...state};
            t = newState.todos.filter(todo => todo.status === false);
            newState.filterByStatus.unActive = t;
            newState.filterByStatus.active = null;
            newState.filterByStatus.all = null;
            console.log(newState)
            return {...newState, filterByStatus: {...newState.filterByStatus}};
        case UPDATE_TODO:
            newState = {...state};
            idx = newState.todos.findIndex(todo => todo.id === action.payload.id);
            newState.todos[idx] = {...newState.todos[idx], text: action.payload.text};
            if(newState.filterByStatus.all){newState.filterByStatus.all = newState.todos};
            if(newState.filterByStatus.active){newState.filterByStatus.active = newState.todos.filter(todo => todo.status === true)};
            if(newState.filterByStatus.unActive){newState.filterByStatus.unActive = newState.todos.filter(todo => todo.status === false)}
            if(newState.filterByTagColor.all){newState.filterByTagColor.all = newState.todos};
            if(newState.filterByTagColor.green){newState.filterByTagColor.green = newState.todos.filter(todo => todo.tag === "green")}
            if(newState.filterByTagColor.blue){newState.filterByTagColor.blue = newState.todos.filter(todo => todo.tag === "blue")}
            if(newState.filterByTagColor.red){newState.filterByTagColor.red = newState.todos.filter(todo => todo.tag === "red")}
            if(newState.filterByTagColor.orange){newState.filterByTagColor.orange = newState.todos.filter(todo => todo.tag === "orange")}
            if(newState.filterByTagColor.purple){newState.filterByTagColor.purple = newState.todos.filter(todo => todo.tag === "purple")}

            return {...newState, todos: [...newState.todos], filterByStatus: {...newState.filterByStatus}};
        case MARK_ALL_COMPLETE:
            newState = {...state}
            for(let t of newState.todos){
                t.status = true
            }
            return {...newState,todos: [...newState.todos]};
        case CLEAR_ALL_COMPLETE:
            newState = { ...state };
            t = newState.todos.filter(todo => todo.status === false);
            return {...newState, todos: t}
        case ADD_TODO:
            newState = {...state};
            return {...newState, todos: [...newState.todos, action.payload]};

        case ADD_TAG:
            newState = {...state};
            idx = newState.todos.findIndex((todo) => todo.id === action.payload);
            newState.todos[idx] = { ...newState.todos[idx], tag: action.tag }
        return {...newState, todos: [...newState.todos]};
            
        case ADD_STATUS:
            newState = {...state};
            idx = newState.todos.findIndex((todo) => todo.id === action.payload);
            newState.todos[idx] = { ...newState.todos[idx], status: action.status }
        return {...newState, todos: [...newState.todos]};

        case DELETE_TODO:
            newState = {...state};
            t = newState.todos.filter(todo => todo.id !== action.payload)
            newState.filterByStatus.all = t;
            newState.filterByTagColor = t;
            return { ...newState, todos: t, filterByStatus: {...newState.filterByStatus}, filterByTagColor: {...newState.filterByTagColor} };
        

    }
    return state;
}