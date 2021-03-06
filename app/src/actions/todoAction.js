import fetch from 'isomorphic-fetch';
import { INIT_TODO, ADD_TODO, ADD_TODO_FROM_SERVER, COMPLETE_TODO, DELETE_TODO } from '../constants/todoConstant';

const getData = (dispatch, url, action) => {
    fetch(url)
    .then(response =>  response.json())
    .then(data => dispatch(action(data)));
}

export function fetchInitTodo() {
    return (dispatch) => {
        return getData(dispatch, 'https://bbandydd.github.io/React_Redux_Todolist/initial.json', initTodo);
    }
}

const initTodo = (data) => {
    return {
        type: INIT_TODO,
        data
    }
}

export function fetchAddTodoFromServer() {
    return (dispatch) => {
        return getData(dispatch, 'https://bbandydd.github.io/React_Redux_Todolist/add.json', addTodoFromServer);
    }
}

const addTodoFromServer = (data) => {
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
