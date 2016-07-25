import { INIT_TODO, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../constants/todoConstant';

export function initTodo() {
    return {
        type: INIT_TODO
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
