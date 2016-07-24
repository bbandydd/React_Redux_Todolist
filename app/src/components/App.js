import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todoConstant } from '../constants/todoConstant';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import { addTodo, completeTodo, deleteTodo } from '../actions/todoAction';
import { setFilter } from '../actions/filterAction';

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
        case todoConstant.FILTERS.SHOW_ALL:
            return todos;
        case todoConstant.FILTERS.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case todoConstant.FILTERS.SHOW_ACTIVE:
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
