import { INIT_TODO, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../constants/todoConstant';

export default function todos(state = [], action) {
    switch(action.type) {
        case INIT_TODO:

            let initState = [
                {
                    text: '1111',
                    completed: false
                }, {
                    text: '2222',
                    completed: true
                }, {
                    text: '3333',
                    completed: false
                }, {
                    text: '4444',
                    completed: false
                }
            ]

            return [
                ...initState
            ]
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
