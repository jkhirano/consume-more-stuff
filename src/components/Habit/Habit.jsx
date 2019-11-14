import React from "react";
// import styles from './Habit.module.css'

const Habit = function(props) {
  return (
    <div>
      <span className="id">{props.id}</span>:
      <span className="name">{props.name}</span>:
      <span className="category">{props.category}</span>
    </div>
  );
};

export default Habit;
