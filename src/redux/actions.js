

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_TAG = "ADD_TAG";
export const ADD_STATUS = "ADD_STATUS";
export const CLEAR_ALL_COMPLETE = "CLEAR_ALL_COMPLETE";
export const MARK_ALL_COMPLETE = "MARK_ALL_COMPLETE";
export const FILTER_ACTIVE = "FILTER_ACTIVE";
export const FILTER_UNACTIVE = "FILTER_UNACTIVE";
export const FILTER_ALL= "FILTER_ALL";
export const FILTER_WHITE= "FILTER_WHITE";
export const FILTER_RED= "FILTER_RED";
export const FILTER_GREEN= "FILTER_GREEN";
export const FILTER_BLUE= "FILTER_BLUE";
export const FILTER_ORANGE= "FILTER_ORANGE";
export const FILTER_PURPLE= "FILTER_PURPLE";

export function filterAllColor() {
    return {
        type: FILTER_WHITE
    }
}


export function filterRed() {
    return {
        type: FILTER_RED
    }
}


export function filterBlue() {
    return {
        type: FILTER_BLUE
    }
}


export function filterGreen() {
    return {
        type: FILTER_GREEN
    }
}


export function filterOrange() {
    return {
        type: FILTER_ORANGE
    }
}


export function filterPurple() {
    return {
        type: FILTER_PURPLE
    }
}

export function filterAll(){
    return {
        type: FILTER_ALL
    }
}

export function filterUnactive(){
    return {
        type: FILTER_UNACTIVE,
    }
}

export function filterActive(){
    return {
        type: FILTER_ACTIVE,
    }
}

export function markAllComplete(){
    return {
        type: MARK_ALL_COMPLETE
    }
}


export function clearAllComplete() {
    return {
        type: CLEAR_ALL_COMPLETE,
        
    }
}

export function addStatus(todoID, status) {
    return {
        type:ADD_STATUS,
        payload: todoID,
        status: status
    }
}

export function addTag(todoID, tag) {
    return {
        type:ADD_TAG,
        payload: todoID,
        tag: tag
    }
}

export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}

export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}


