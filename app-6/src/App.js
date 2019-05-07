import React, { Component } from "react";
import Todo from "./components/Todo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      input: ""
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }
  handleInputChange(val) {
    this.setState({ input: val });
  }
  handleAddTask() {
    this.setState({
      tasks: [...this.state.tasks, this.state.input],
      input: ""
    });
  }

  render() {
    let tasks = this.state.tasks.map((element, index) => {
      return <Todo key={index} task={element} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            val={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {tasks}
      </div>
    );
  }
}

export default App;
