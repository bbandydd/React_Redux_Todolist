import React, { Component } from 'react';
import { FILTERS } from '../constants/todoConstant';

export default class Filter extends Component {
    constructor() {
        super();
    }

    renderFilter(filter, name) {
        if (filter == this.props.filter) {
            return name;
        }

        return (
            <a
                href="#"
                className={`filter_${name}`}
                onClick = {
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
            <p id="filters">
                { this.renderFilter(FILTERS.SHOW_ALL, 'All') }
                { ', ' }
                { this.renderFilter(FILTERS.SHOW_COMPLETED, 'Completed') }
                { ', ' }
                { this.renderFilter(FILTERS.SHOW_ACTIVE, 'Active') }
            </p>
        )
    }
}
