import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Index.scss';
import Axios from 'axios';
import moment from 'moment';
import { addYears } from 'date-fns';
import Entry from '../Home/Entry';

class DayTranscript extends Component {
    render() {
        let items = this.props.items
        if (items) {
            items = items.map((item) => (
                <Entry id={item.id} createdAt={item.createdAt} key={item.id} fresh={item.fresh} text={item.text} delete={this.props.delete} absoluteTime={true} />
            ))
        }
        return (
            <div className="container">
                <h1>{moment(this.props.day).format("MMMM Do")}</h1>
                {items}
            </div>
        );
    }
}

export default DayTranscript;