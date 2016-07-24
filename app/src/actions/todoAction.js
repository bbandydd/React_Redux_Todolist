import { todoConstant } from '../constants/todoConstant';

export function addTodo(text) {
    return {
        type: todoConstant.ADD_TODO,
        text
    }
}

export function completeTodo(index) {
    return {
        type: todoConstant.COMPLETE_TODO,
        index
    }
}

export function deleteTodo(index) {
    return {
        type: todoConstant.DELETE_TODO,
        index
    }
}
