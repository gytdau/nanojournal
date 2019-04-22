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

                        <Link to="/sign_up" className="btn btn-light mr-4">Sign up</Link>
                        <Link to="/sign_in" className="btn btn-outline-light">Sign in</Link>
                    </div>
                </section>
                <div className="container">
                    <div className="row section">
                        <div className="col-md-8 offset-md-2 text-center mt-4">
                            <h3>Try bite-sized journalling with the Nanojournal method:</h3>
                        </div>
                    </div>
                </div>
                <div className="section section-dark">
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
                </div>
                <div className="section">
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
                                <h3>By taking nano-sized breaks to journal, you'll stay calmer, be more ready, and make better decisions.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 offset-md-1 section ">
                                <h1>Reach a higher standard.</h1>
                                <h5>If you're serious about productivity, you need to protect yourself from going off-track. Nanojournalling helps you pause and consider before you dive into another task, which helps prevent getting distracted or unfocused.</h5>
                            </div>
                            <div className="col-md-6 offset-md-1 landing-doers"></div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Keep focused.</h3>
                                        <p>By reflecting on what you're about to do, you'll get more important stuff done.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Feel better.</h3>
                                        <p>As you won't get sucked into unproductive spirals, you'll feel great and do greater.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Do more.</h3>
                                        <p>Breaks and journalling are proven to help you work better and do more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 1920 250" xmlns="http://www.w3.org/2000/svg" class="DividerSvg-nhcneq-0 laHIGl"><path d="M1920 250H0V0s126.707 78.536 349.975 80.05c177.852 1.203 362.805-63.874 553.803-63.874 290.517 0 383.458 57.712 603.992 61.408 220.527 3.696 278.059-61.408 412.23-17.239" class="WaveFooter___StyledPath-nrfszb-0 jsDSRA"></path><path d="M1920 144s-467.917 116.857-1027.243-17.294C369.986 1.322 0 45.578 0 45.578V250h1920V144z" class="sc-bdVaJa crfQos"></path><path d="M0 195.553s208.547-75.581 701.325-20.768c376.707 41.908 520.834-67.962 722.545-67.962 222.926 0 311.553 83.523 496.129 86.394V250H0v-54.447z" class="sc-bwzfXH bhaMRn"></path></svg>
                <div className="section section-dark-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <h1>Ready to take the first step?</h1>
                                <Link to="/sign_up" className="btn btn-primary mr-4">Sign up</Link>
                                <Link to="/sign_in" className="btn btn-outline-primary">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;