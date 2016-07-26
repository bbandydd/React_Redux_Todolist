import { INIT_TODO, ADD_TODO, ADD_TODO_FROM_SERVER, COMPLETE_TODO, DELETE_TODO } from '../constants/todoConstant';

export default function todos(state = [], action) {
    switch(action.type) {
        case INIT_TODO:
            return action.data;
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completd:false
                }
            ]
        case ADD_TODO_FROM_SERVER:
            return [
                ...state,
                ...action.data
            ];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                { ...state[action.index], completed: true },
                ...state.slice(action.index+1)
            ]
        case DELETE_TODO:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ]
        default:
            return state;
    }
}
