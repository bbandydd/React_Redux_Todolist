import { INIT_TODO, ADD_TODO, ADD_TODO_FROM_SERVER, COMPLETE_TODO, DELETE_TODO } from '../constants/todoConstant';

export function fetchInitTodo() {
    return (dispatch) => {
        return fetch('https://bbandydd.github.io/React_Redux_Todolist/initial.json')
            .then((response) => {
                return response.json();
            })
            .then(function(data) {
                dispatch(initTodo(data));
            });
    }
}

let initTodo = (data) => {
    return {
        type: INIT_TODO,
        data
    }
}

export function fetchAddTodoFromServer() {
    return (dispatch) => {
        return fetch('https://bbandydd.github.io/React_Redux_Todolist/add.json')
            .then((response) => {
                return response.json();
            })
            .then(function(data) {
                dispatch(addTodoFromServer(data));
            })
    }
}

let addTodoFromServer = (data) => {
    return {
        type: ADD_TODO_FROM_SERVER,
        data
    }
}


export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}

export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index
    }
}
