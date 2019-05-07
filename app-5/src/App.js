import React, { Component } from "react";
import Image from "./Image";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url="https://i.imgur.com/oOXDJDU.jpg" />
      </div>
    );
  }
}

export default App;
