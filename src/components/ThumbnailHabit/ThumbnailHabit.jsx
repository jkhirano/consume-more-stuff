import React from "react";
import "./ThumbnailHabit.css";
// import { styles } from "../ThumbnailHabit.module.css";

const ThumbnailHabit = function(props) {
  // console.log("props habit", props.habit);
  // console.log(props.habit.images[0].url);
  return (
    <li
      className="thumbnail"
      onClick={function() {
        // console.log("bleh", props.habit.images[0]);
        props.changeDetailedId(props.habit.id);
      }}
    >
      {props.habit.images && (
        <img className="image" alt="habit" src={props.habit.images[0].url} />
      )}
      <li className="name">{props.habit.name}</li>
      <span className="price">${props.habit.price}</span> |
      <span className="condition">{props.habit.condition.condition}</span>
    </li>
  );
};

export default ThumbnailHabit;
