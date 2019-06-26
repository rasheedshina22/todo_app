import React from "react";
import PropTypes from "prop-types";
import Goal from "./Goal";

const Goals = props => {
  const { goals, deleteGoal } = props;
  return (
    <div className="container">
      {goals.length !== 0 ? (
        goals.map(goal => {
          return <Goal goal={goal} key={goal.id} deleteGoal={deleteGoal} />;
        })
      ) : (
        <h2>You dont have anymore goals</h2>
      )}
    </div>
  );
};

Goals.propTypes = {
  goals: PropTypes.array.isRequired,
  deleteGoal: PropTypes.func.isRequired
};

export default Goals;
