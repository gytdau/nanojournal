import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';
import moment from 'moment';
import { addYears } from 'date-fns';
import Entry from './Entry';

class History extends Component {
    render() {
        let items = this.props.items

        if (items) {
            items = items.map((item) => (
                <Entry id={item.id} createdAt={item.createdAt} key={item.id} fresh={item.fresh} text={item.text} refreshSwitch={this.props.refreshSwitch} delete={this.props.delete} />
            ))
        }
        return (
            <div className="container">
                {items}
            </div>
        );
    }
}

export default History;