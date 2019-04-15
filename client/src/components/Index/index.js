import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Index.scss';

class Index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="landing-page">
                <section className="masthead masthead-landing">
                    <div className="container">
                        <h3><strong><i className="mdi mdi-circle-outline" /> Nanojournal</strong></h3>
                        <h1>Infuse zen into your work.</h1>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="example">
                                <div className="col-md-10 offset-md-1">
                                    <h5>Add a new entry</h5>
                                    <input className="form-control mb-2" value="Just finished my first draft. I'm now going to work on my presentation."></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center mt-4">
                            <h3>Whenever you're about to change the task you're working on, record it on nanojournal.</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="example">
                                <div className="col-md-10 offset-md-1">
                                    <h5>1:15PM Finished report, taking a break.</h5>
                                    <h5>1:21PM Done break, working on presentation slides.</h5>
                                    <h5>1:54PM Went great - worked for an hour. Time for another break.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center mt-4">
                            <h3>Nanojournal will keep you on track and focused, thwarting distractions and helping you reach flow.</h3>
                        </div>
                    </div>
                </div>
                <div className="landing-doers text-white">
                    <div className="container">
                        <div className="col-md-6 bg-dark landing-doers-box">
                            <h1>Nanojournal is for doers.</h1>
                            <h3>If you're serious about productivity, you need to protect yourself from going off-track. Nanojournalling helps you pause and consider before you dive into another task, which helps prevent getting distracted or unfocused.</h3>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-1">
                                <div className="card-body">
                                    <h3>Keep focused.</h3>
                                    <p>By reflecting on what you're about to do, you'll get more important stuff done.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-2">
                                <div className="card-body">
                                    <h3>Feel better.</h3>
                                    <p>By not getting sucked into unproductive spirals, you'll feel great and do greater.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-3">
                                <div className="card-body">
                                    <h3>Explore your history.</h3>
                                    <p>Go back days, months, or years in your Nanojournal, to understand what you were doing to the second.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;