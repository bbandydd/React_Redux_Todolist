import { createStore, combineReducers } from 'redux';
import todos from '../reducers/todoReducer';
import filters from '../reducers/filterReducer';

let Reducers = combineReducers({
    todos, filters
});

export default createStore(Reducers);
