import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todos from '../reducers/todoReducer';
import filters from '../reducers/filterReducer';

let Reducers = combineReducers({
    todos, filters
});

export default applyMiddleware(thunk)(createStore)(Reducers, window.devToolsExtension ? window.devToolsExtension() : undefined);
