import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Index.scss';
import Axios from 'axios';
import moment from 'moment';
import { addYears } from 'date-fns';

class DayTranscript extends Component {
    render() {
        let items = this.props.items
        if (items) {
            items = items.map((item) => (
                <div className="row">
                    <div className="col-md-2 text-muted text-right">
                        {moment(item.createdAt).format('MMMM Do, hh:mm:ss')}
                    </div>
                    <div className="col-md-2 text-muted text-right">
                        {item.action}
                    </div>
                    <div className="col-md-6">
                        {item.text}
                    </div>
                </div>
            ))
        }
        return (
            <div className="container">
                <div className="col-md-12">
                    <h1>Day {this.props.day}</h1>
                    {items}
                </div>
            </div>
        );
    }
}

export default DayTranscript;