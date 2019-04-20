import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';
import moment from 'moment';
import { addYears } from 'date-fns';

class History extends Component {
    render() {
        let items = this.props.items
        if (items) {
            items = items.map((item) => (
                <div key={item.id} className={"entry" + (item.fresh ? " entry--fresh" : "")}>
                    <div className="row">
                        <div className="col-md-9">
                            {item.text}
                        </div>
                        <div className="col-md-3 text-muted">
                            {moment(item.createdAt).fromNow()}
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