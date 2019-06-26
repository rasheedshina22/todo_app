import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Goals from "./components/Goals";
import { BrowserRouter as Router } from "react-router-dom";
import AddGoal from "./components/AddGoal";

class App extends Component {
  state = {
    goals: [
      { id: 1, title: "read 50 books this year" },
      { id: 2, title: "master react this year" },
      { id: 3, title: "master Node and Express this year" },
      { id: 4, title: "master vue this year" },
      { id: 5, title: "master angular this year" }
    ]
  };

  addGoal = new_goal => {
    const goals = [...this.state.goals, new_goal];
    this.setState({ goals: goals });
  };

  deteteGoal = id => {
    const new_goals = this.state.goals.filter(goal => goal.id !== id);
    this.setState({ goals: new_goals });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <AddGoal addGoal={this.addGoal} />
          <Goals goals={this.state.goals} deleteGoal={this.deteteGoal} />
        </div>
      </Router>
    );
  }
}

export default App;
