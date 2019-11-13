import React from "react";
import "./ThumbnailHabit.css";
// import { styles } from "../ThumbnailHabit.module.css";

const ThumbnailHabit = function(props) {
  return (
    <div
      className="thumbnail"
      onClick={function() {
        props.changeDetailedId(props.habit.id);
      }}
    >
      <li className="image">{props.habit.url}</li>
      <li className="name">{props.habit.name}</li>
      {/* <span className={styles.name}>{props.habit.name}</span> */}
      <span className="price">${props.habit.price}</span> |
      <span className="condition">{props.habit.condition.condition}</span>
    </div>
  );
};

export default ThumbnailHabit;
