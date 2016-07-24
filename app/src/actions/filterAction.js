import { todoConstant } from '../constants/todoConstant';

export function setFilter(filter) {
    return {
        type: todoConstant.SET_FILTER,
        filter
    }
}
