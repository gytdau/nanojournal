import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Index.scss';
import Axios from 'axios';
import moment from 'moment';
import { addYears } from 'date-fns';

class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        Axios.get("/items/overview").catch((response) => {
            this.setState({
                days: [
                    {
                        date: "2019-03-12",
                        activity: "45"
                    },
                    {
                        date: "2019-03-12",
                        activity: "45"
                    },
                    {
                        date: "2019-03-12",
                        activity: "45"
                    },
                    {
                        date: "2019-03-12",
                        activity: "45"
                    },
                    {
                        date: "2019-03-12",
                        activity: "45"
                    }
                ]
            })
        })
    }
    render() {
        let days = this.state.days
        if (days) {
            days = days.map((day) => (
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
            <div className="landing-page">
                <section className="masthead masthead-landing">
                    <div className="container">
                        <h3><strong><i className="mdi mdi-circle-outline" /> Gytis's Transcript</strong></h3>
                    </div>
                </section>
                <div className="container">
                    <div className="col-md-12">
                        {items}
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;