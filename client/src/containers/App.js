import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.scss';
import Navbar from './Navbar'
import Home from '../components/Home'
import Index from '../components/Index'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import Overview from '../components/Overview';
class App extends Component {
    componentDidMount() {
        loadProgressBar({ showSpinner: false })
    }
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Index} />
                    <Route path="/home" component={Home} />
                    <Route path="/overview" component={Overview} />
                    <Route path="/sign_in" component={SignIn} />
                    <Route path="/sign_up" component={SignUp} />
                </div>
            </Router>
        );
    }
}

export default App;