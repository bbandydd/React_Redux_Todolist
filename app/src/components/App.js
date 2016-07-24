import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import { addTodo, completeTodo, deleteTodo, ADD_TODO, COMPLETE_TODO, DELETE_TODO } from '../actions/todoAction';
import { setFilter, FILTERS } from '../actions/filterAction';

class App extends Component {
    constructor() {
        super();
    }

    render() {

        const { dispatch, todos, filters } = this.props;
        return (
            <div>
                <Filter
                    filter={filters}
                    onSetFilter = {
                        nextFilter => dispatch(setFilter(nextFilter))
                    }
                />
                <AddTodo
                    onAddClick = {
                        text => dispatch(addTodo(text))
                    }
                />
                <TodoList
                    todos = { todos }
                    onCompletedClick = {
                        index => dispatch(completeTodo(index))
                    }
                    onDeleteClick = {
                        index => dispatch(deleteTodo(index))
                    }
                />
            </div>
        )
    }
}

function filterTodos(todos, filter) {
    switch(filter) {
        case FILTERS.SHOW_ALL:
            return todos;
        case FILTERS.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case FILTERS.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function mapStateToProps(state) {
    return {
        todos: filterTodos(state.todos, state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(App);
