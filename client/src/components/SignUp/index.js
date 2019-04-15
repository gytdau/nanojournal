import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Index.scss';

class Index extends Component {
    render() {
        return (
            <div className="landing-page">
                <section className="masthead">
                    <div className="container">
                        <h3><strong><i className="mdi mdi-circle-outline" /> Nanojournal</strong></h3>
                    </div>
                    <div className="container">
                        <div className="row"><div className="col-md-6">
                            <h1>Get started</h1>
                            <form action="/users/signup" method="POST">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div></div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Index;