import React, { Component } from 'react';
import '../../App.scss';
import Axios from 'axios';
import DayTranscript from '../View/DayTranscript';
import moment from 'moment';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      text: "",
      items: null,
      lastDate: moment().format(moment.HTML5_FMT.DATE)
    }
  }
  componentDidMount() {
    this.loadMore()
  }
  loadMore() {
    let { lastDate, days, items } = this.state
    return Axios.get("/items/day/" + lastDate).catch((error) => {
      console.log('error')
    }).then((response) => {
      console.log("loaded...")
      this.setState({ items: response.data })
    })
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  submit() {
    Axios.post("/items/create", {
      password: this.state.password,
      text: this.state.text,
      action: "Doing"
    }).catch((error) => {
      if (error.response.status != 401) {
        alert("Failed: " + error.message)
      }
    }).then((response) => {
      this.setState({
        text: ""
      })
      this.loadMore()
    })
  }
  render() {
    let history = null
    if (this.state.items != null) {
      history = <DayTranscript items={this.state.items} day={this.state.lastDate} />
    }
    return (
      <div className="container home-container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 className="mb-4">Dashboard</h3>
            <input className="form-control" onChange={this.handleTextChange.bind(this)} value={this.state.text}></input>
            <div className="btn btn-light m-2" onClick={() => { this.submit() }}>Submit</div>
          </div>
          <div className="col-md-8 offset-md-2">
            <h3 className="mb-4">History</h3>
            {history}
          </div>
        </div>

      </div>
    );
  }
}

export default Home;