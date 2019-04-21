import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import axios from "axios";
import * as serviceWorker from './serviceWorker';

axios.defaults.withCredentials = true;
axios.interceptors.response.use(null, function (error) {
    if (error.response.status === 401) {
        window.location = "/sign_in";
    }
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
