import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }
  updateMessage(val) {
    this.setState({ message: val });
  }

  render() {
    return (
      <div className="App">
        <input onChange={e => this.updateMessage(e.target.value)} type="text" />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
