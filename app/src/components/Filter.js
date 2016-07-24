import React, { Component } from 'react';
import { todoConstant } from '../constants/todoConstant';

export default class Filter extends Component {
    constructor() {
        super();
    }

    renderFilter(filter, name) {
        if (filter == this.props.filter) {
            return name;
        }

        return (
            <a href="#" onClick = {
                e => {
                    e.preventDefault();
                    this.props.onSetFilter(filter);
                }
            }>
                { name }
            </a>
        )
    }

    render() {
        return (
            <p>
                { this.renderFilter(todoConstant.FILTERS.SHOW_ALL, 'All') }
                { ', ' }
                { this.renderFilter(todoConstant.FILTERS.SHOW_COMPLETED, 'Completed') }
                { ', ' }
                { this.renderFilter(todoConstant.FILTERS.SHOW_ACTIVE, 'Active') }
            </p>
        )
    }
}
