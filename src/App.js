import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import { HashRouter as Router } from "react-router-dom";
import AddTodo from "./components/AddTodo";

class App extends Component {
	state = {
		todos: [
			{ id: 1, title: "read 50 books this year" },
			{ id: 2, title: "master react this year" },
			{ id: 3, title: "master Node and Express this year" },
			{ id: 4, title: "master vue this year" },
			{ id: 5, title: "master angular this year" }
		]
	};

	AddTodo = new_todo => {
		const todos = [...this.state.todos, new_todo];
		this.setState({ todos: todos });
	};

	deteteTodo = id => {
		const new_todos = this.state.todos.filter(todo => todo.id !== id);
		this.setState({ todos: new_todos });
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />
					<AddTodo addGoal={this.AddTodo} />
					<Todos
						todos={this.state.todos}
						deleteTodo={this.deteteTodo}
					/>
				</div>
			</Router>
		);
	}
}

export default App;
