import React, { Component } from 'react';

export default class Todo extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <li className={'todo'}>
                <span
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none'
                    }}
                >
                    {this.props.text} {this.props.completed}
                </span>

                <button
                    onClick={this.props.onCompletedClick}
                    className={this.props.completed ? 'hide' : 'show', 'complete'}
                >
                    Complete
                </button>

                <button
                    onClick={this.props.onDeleteClick}
                    className={'delete'}
                >
                    Delete
                </button>
            </li>
        )
    }
}
