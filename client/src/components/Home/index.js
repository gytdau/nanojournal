import React, { Component } from 'react';
import '../../App.scss';
import Axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      text: ""
    }
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }
  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }
  submit(action) {
    Axios.post("/items/create", {
      password: this.state.password,
      text: this.state.text,
      action
    }).catch((response) => {
      console.log(response)
      alert("Failed: " + response.message)
    }).then((response) => {
      this.setState({
        text: ""
      })
    })
  }
  render() {
    return (
      <div className="container home-container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 className="mb-4"><i className="mdi mdi-circle-outline" /> Gytis's Transcript Dashboard</h3>
            <input className="form-control mb-2" placeholder="Password" type="password" onChange={this.handlePasswordChange.bind(this)} value={this.state.password}></input>
            <input className="form-control" onChange={this.handleTextChange.bind(this)} value={this.state.text}></input>
            {["Consumed", "Thought", "Ate", "Felt", "Reflected", "Planning", "Doing"].map((action) => (
              <div className="btn btn-light m-2" onClick={() => { this.submit(action) }}>{action}</div>
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default Home;