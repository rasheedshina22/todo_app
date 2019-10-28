import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Todo extends Component {
	handleDelete(id) {
		this.props.deleteTodo(id);
	}

	render() {
		const { todo } = this.props;
		return (
			<div>
				<ul className="collection">
					<li className="collection-item">
						{todo.title}
						<Link to="/" className="secondary-content">
							<i className="material-icons edit">edit</i>
						</Link>
						<Link to="/" className="secondary-content">
							<i
								onClick={this.handleDelete.bind(this, todo.id)}
								className="material-icons delete"
							>
								delete
							</i>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

Todo.propTypes = {
	todo: PropTypes.object.isRequired
};

export default Todo;
