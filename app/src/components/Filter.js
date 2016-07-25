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
                { this.renderFilter(FILTERS.SHOW_ALL, 'All') }
                { ', ' }
                { this.renderFilter(FILTERS.SHOW_COMPLETED, 'Completed') }
                { ', ' }
                { this.renderFilter(FILTERS.SHOW_ACTIVE, 'Active') }
            </p>
        )
    }
}
