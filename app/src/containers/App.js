import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, FILTERS } from '../constants/todoConstant';
import { fetchInitTodo, fetchAddTodoFromServer, initTodo, addTodo, completeTodo, deleteTodo } from '../actions/todoAction';
import { setFilter } from '../actions/filterAction';

class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        // //取得初始化資料
        // const { dispatch } = this.props;
        // dispatch(fetchInitTodo());
    }

    render() {

        const { dispatch, todos, filters } = this.props;
        return (
            <div>
                <h1 id="title">todo MVC</h1>
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
                    onAddFromServerClick = {
                        () => dispatch(fetchAddTodoFromServer())
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
