import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const Todos = props => {
	const { todos, deleteTodo } = props;
	return (
		<div className="container">
			{todos.length !== 0 ? (
				todos.map(todo => {
					return (
						<Todo
							todo={todo}
							key={todo.id}
							deleteTodo={deleteTodo}
						/>
					);
				})
			) : (
				<h2>You dont have anymore todos </h2>
			)}
		</div>
	);
};

Todos.propTypes = {
	todos: PropTypes.array.isRequired,
	deleteGoal: PropTypes.func.isRequired
};

export default Todos;
