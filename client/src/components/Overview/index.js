import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './Index.scss';
import Axios from 'axios';
import moment from 'moment';
import DayTranscript from './DayTranscript';
import InfiniteScroll from 'react-infinite-scroller';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrolling: "daytranscript",
            lastDate: moment().toDate(),
            hasMore: true,
            days: [],
            items: {}
        }
    }
    loadMore() {
        let { lastDate, days, items, hasMore } = this.state
        return Axios.post("/items/before", {
            timestamp: lastDate
        }).catch((error) => {
            console.log('error')
        }).then((response) => {
            console.log("loaded...")
            response.data.map((entry) => {
                let date = moment(entry.createdAt).format(moment.HTML5_FMT.DATE)
                if (!items.hasOwnProperty(date)) {
                    items[date] = [entry]
                    days.push(date)
                } else {
                    items[date].push(entry)
                }
                lastDate = entry.createdAt
            })
            if (response.data.length == 0) {
                hasMore = false
            }
            this.setState({ lastDate, days, items, hasMore })
        })
    }
    delete(id) {
        Axios.post("/items/delete", {
            id
        }).catch((error) => {
            if (error.response.status != 401) {
                alert("Failed: " + error.message)
            }
        }).then((response) => {
            this.setState({
                scrolling: "daytranscript",
                lastDate: moment().toDate(),
                hasMore: true,
                days: [],
                items: {}
            })
        })
    }
    render() {
        return (
            <div className="landing-page">
                <section className="masthead masthead-landing">
                    <div className="container">
                        <h3><strong><i className="mdi mdi-circle-outline" /> Gytis's Transcript</strong></h3>
                    </div>
                </section>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore.bind(this)}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {this.state.days.map((day) => (
                        <DayTranscript items={this.state.items[day]} day={day} delete={this.delete.bind(this)} />
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

export default Index;