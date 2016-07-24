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
                    {this.props.text}
                </span>

                <button
                    onClick={this.props.onCompletedClick}
                    style={{
                        display: this.props.completed ? 'none' : 'default'
                    }}
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
