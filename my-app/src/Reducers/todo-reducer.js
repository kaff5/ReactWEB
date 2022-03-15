import {todoApi} from "../APi/todoApi";

const LOAD_TODO = "LOAD_TODO"

let initialState = {
    todoLists: []
}

export const todoReducer =  (state = initialState,action) =>{
    let newState = {...state};
    switch (action.type)
    {
        case LOAD_TODO:
            newState.todoLists = action.todoLists;
            return newState;
        default:
            return newState;
    }
}


export function loadTodoActionCreator(todoLists) {
    return {type: LOAD_TODO, todoLists : todoLists}
}

export function loadTodoThunkCreator() {
    return (dispatch) => {
        todoApi.getTodoList().then(data => {
            dispatch(loadTodoActionCreator(data));
        })
        
    }
}

export function createSpisokThunkCreator(title) {
    return (dispatch) => {
        todoApi.createSpisok(title.current.value).then(data => {
            dispatch(loadTodoThunkCreator());
        })
    }
}
export function createToDoItemThunkCreator(id,titleRef,conRef,priorityRef,spisokRef) {
    return (dispatch) => {
        todoApi.createToDoItem(id,titleRef,conRef,priorityRef,spisokRef).then(data => {
            dispatch(loadTodoThunkCreator());
        })
    }
}

export function deleteSpisokThunkCreator(id) {
    return (dispatch) => {
        todoApi.removeTodoList(id).then(data => {
            dispatch(loadTodoThunkCreator());
        })
    }
}
export function checkTaskThunkCreator(ownerId,id) {
    return (dispatch) => {
        todoApi.checkTask(ownerId,id).then(data => {
            dispatch(loadTodoThunkCreator());
        })
    }
}
export function deleteTaskThunkCreator(ownerId,id) {
    return (dispatch) => {
        todoApi.removeTask(ownerId,id).then(data => {
            dispatch(loadTodoThunkCreator());
        })
    }
}

