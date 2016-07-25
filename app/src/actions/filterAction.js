import { SET_FILTER } from '../constants/todoConstant';

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    }
}
