import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/todoAction';

export default function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completd:false
                }
            ]
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                { ...state[action.index], completed: true },
                ...state.slice(action.index+1)
            ]
        case DELETE_TODO:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1, state.length)
            ]
        default:
            return state;
    }
}
