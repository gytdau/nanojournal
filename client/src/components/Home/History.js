import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';
import moment from 'moment';
import { addYears } from 'date-fns';

class History extends Component {
    render() {
        let items = this.props.items
        let now = moment()
        function customTemplate() {
            if (this.duration.asSeconds() >= 60 * 60) {
                return "h:mm [hours]"
            } else if (this.duration.asSeconds() >= 60) {
                return "m [min]"
            } else {
                return "[just now]";
            }

        }
        if (items) {
            items = items.map((item) => (
                <div key={item.id} className={"entry" + (item.fresh ? " entry--fresh" : "")}>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="text-muted">
                                {moment.duration(now.diff(moment(item.createdAt))).format(customTemplate, { trim: false })}
                            </div>
                            <p>{item.text}</p>
                        </div>
                    </div>
                </div>
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