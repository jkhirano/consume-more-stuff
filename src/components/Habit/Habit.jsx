import React from "react";
// import styles from './Habit.module.css'
// import { connect } from "react-redux";

const Habit = function(props) {
  return (
    <div>
      <span className="name">{props.name}</span>:
      <span className="category">{props.category}</span>
    </div>
  );
};

export default Habit;
// testing Github... there is a empty new line below this...
