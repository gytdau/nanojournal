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
                    <div className="col-md-9">
                        {item.text}
                    </div>
                    <div className="col-md-3 text-muted">
                        {moment(item.createdAt).format("HH:mm")}
                    </div>
                </div>
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