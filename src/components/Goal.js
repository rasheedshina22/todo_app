import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Goal extends Component {
  handleDelete(id) {
    this.props.deleteGoal(id);
  }

  render() {
    const { goal } = this.props;
    return (
      <div>
        <ul className="collection">
          <li className="collection-item">
            {goal.title}
            <Link to="/" className="secondary-content">
              <i className="material-icons edit">edit</i>
            </Link>
            <Link to="/" className="secondary-content">
              <i
                onClick={this.handleDelete.bind(this, goal.id)}
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

Goal.propTypes = {
  goal: PropTypes.object.isRequired
};

export default Goal;
