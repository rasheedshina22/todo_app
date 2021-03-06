import React, { Component } from "react";
import uuid from "uuid";

class AddTodo extends Component {
	state = {
		title: ""
	};

	handleChange = e => {
		this.setState({ title: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const new_todo = {
			id: uuid.v4(),
			title: this.state.title
		};
		this.props.addGoal(new_todo);
		this.setState({ title: "" });
	};
	render() {
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="input-field s6">
							<input
								type="text"
								placeholder="Enter goal for the Year..."
								onChange={this.handleChange}
								name="title"
								value={this.state.title}
							/>
							<input
								type="submit"
								value="Add a Todo"
								className="btn btn-primary"
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddTodo;
