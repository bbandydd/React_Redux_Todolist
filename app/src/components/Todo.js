import React, { Component } from 'react';

export default class Todo extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <li>
                <span
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none'
                    }}
                >
                    {this.props.text} {this.props.completed}
                </span>

                <button
                    onClick={this.props.onCompletedClick}
                    className={this.props.completed ? 'hide' : 'show'}
                >
                    Complete
                </button>

                <button
                    onClick={this.props.onDeleteClick}
                >
                    Delete
                </button>
            </li>
        )
    }
}
