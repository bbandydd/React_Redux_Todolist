import { todoConstant } from '../constants/todoConstant';

export default function todos(state = [], action) {
    switch(action.type) {
        case todoConstant.ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completd:false
                }
            ]
        case todoConstant.COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                { ...state[action.index], completed: true },
                ...state.slice(action.index+1, state.length)
            ]
        case todoConstant.DELETE_TODO:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1, state.length)
            ]
        default:
            return state;
    }
}
