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
            lastDate: moment().format(moment.HTML5_FMT.DATE),
            days: [],
            items: {}
        }
    }

    componentDidMount() {
        this.loadMore()
    }
    loadMore() {
        let { lastDate, days, items } = this.state
        lastDate = moment(lastDate).subtract(1, 'days').format(moment.HTML5_FMT.DATE)
        return Axios.get("/items/day/" + lastDate).catch((error) => {
            console.log('error')
        }).then((response) => {
            console.log("loaded...")
            days.push(lastDate)
            items[lastDate] = response.data
            this.setState({ lastDate, days })
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
                    hasMore={true}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {this.state.days.map((day) => (
                        <DayTranscript items={this.state.items[day]} day={day} />
                    ))}
                </InfiniteScroll>
            </div>
        );
    }
}

export default Index;