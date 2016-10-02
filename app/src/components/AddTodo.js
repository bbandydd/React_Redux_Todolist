import React, { Component } from 'react';

export default class addTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input id="new_todo" type="text" ref="input" />
                <button id="btn_add" onClick={this.handleClick.bind(this)}>
                    add
                </button>
                <button id="btn_ajax" onClick={this.props.onAddFromServerClick.bind(this)}>
                    get server data
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
