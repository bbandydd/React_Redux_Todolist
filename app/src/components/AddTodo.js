import React, { Component } from 'react';

export default class addTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input type="text" ref="input" />
                <button onClick={this.handleClick.bind(this)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(e) {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}
