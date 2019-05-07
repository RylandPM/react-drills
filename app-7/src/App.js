import React, { Component } from "react";
import NewTask from "./components/NewTask";
import List from "./components/List";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleInputChange(val) {
    this.setState({ input: val });
  }
  handleAddTask(value) {
    this.setState({
      tasks: [...this.state.tasks, value]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
