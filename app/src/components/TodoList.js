import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map((todo, index) =>
                        <Todo
                            {...todo}
                            key={index}
                            onCompletedClick={() => this.props.onCompletedClick(index)}
                            onDeleteClick={() => this.props.onDeleteClick(index)}
                        />
                    )
                }
            </ul>
        )
    }
}
