import { todoConstant } from '../constants/todoConstant';

export default function filters (state = todoConstant.FILTERS.SHOW_ALL, action) {
    switch(action.type) {
        case todoConstant.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
