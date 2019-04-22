import React, { Component } from 'react';
import './Home.scss';
import Axios from 'axios';
import History from './History';
import moment from 'moment';
import Page from '../../containers/Page';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      text: "",
      items: null,
      refreshSwitch: false,
      lastDate: moment().format(moment.HTML5_FMT.DATE)
    }
  }
  componentDidMount() {
    this.loadMore()
    this.setState({
      timer: setInterval(this.refresh.bind(this), 1000 * 10)
    })
  }
  refresh() {
    this.setState({ refreshSwitch: !this.state.refreshSwitch })
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
      let { items } = this.state
      items.map(item => { item.fresh = false; })
      items.unshift({
        ...response.data,
        fresh: true
      })
      this.setState({
        text: "",
        items
      })
    })
  }
  keyPress(event) {
    if (event.key === 'Enter') {
      this.submit()
    }
  }
  render() {
    let history = null
    let { items, refreshSwitch, text } = this.state
    if (items != null) {
      history = <History items={items} refreshSwitch={refreshSwitch} />
    }
    return (
      <Page>
        <div className="container home-container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h5 className="mb-4">What are you working on?</h5>
              <div class="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleTextChange.bind(this)}
                  value={text}
                  onKeyDown={this.keyPress.bind(this)}></input>
                <div>
                  <div className="btn btn-outline-secondary ml-2" onClick={() => { this.submit() }}>Add entry</div>
                </div>
              </div>
            </div>
            <div className="col-md-8 offset-md-2">
              {history}
            </div>
          </div>

        </div>
      </Page>
    );
  }
}

export default Home;