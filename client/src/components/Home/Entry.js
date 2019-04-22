import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Axios from 'axios';
import moment from 'moment';
import { addYears } from 'date-fns';

class Entry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }
        this.toggleExpand = this.toggleExpand.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.id != this.props.id || nextProps.text != this.props.text || nextProps.refreshSwitch != this.props.refreshSwitch) {
            return true;
        }
        if (nextState.expanded != this.state.expanded) {
            return true;
        }
        return false;
    }
    toggleExpand() {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        let { id, createdAt, fresh, text } = this.props
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
        if (this.state.expanded) {
            return <div key={id} className={"entry entry--expanded"} onClick={this.toggleExpand}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="text-muted">
                            {moment.duration(now.diff(moment(createdAt))).format(customTemplate, { trim: false })}
                        </div>
                        <p>{text}</p>
                        <div className="btn btn-outline-danger" onClick={() => { this.props.delete(this.props.id) }}>Delete</div>
                    </div>
                    <div className="col-md-4 text-right">
                        <div className="btn btn-icon d-3"><i className="mdi mdi-close" /></div>
                    </div>
                </div>
            </div>
        }
        return <div key={id} className={"entry" + (fresh ? " entry--fresh" : "")} onClick={this.toggleExpand}>
            <div className="row">
                <div className="col-md-9">
                    <div className="text-muted">
                        {moment.duration(now.diff(moment(createdAt))).format(customTemplate, { trim: false })}
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    }
}

export default Entry;