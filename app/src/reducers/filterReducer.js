import { SET_FILTER, FILTERS } from '../constants/todoConstant';

export default function filters (state = FILTERS.SHOW_ALL, action) {
    switch(action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}
