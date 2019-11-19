import React from "react";
import styles from "./ThumbnailHabit.module.css";

const ThumbnailHabit = function(props) {
  return (
    <ul
      className="thumbnail"
      onClick={function() {
        props.changeDetailedId(props.habit.id);
      }}
    >
      {props.habit.images && (
        <img
          className={styles.image}
          alt="habit"
          src={props.habit.images[0].url}
        />
      )}
      <li className="name">{props.habit.name}</li>
      <span className="price">${props.habit.price}</span> |
      <span className="condition">{props.habit.condition.condition}</span>
    </ul>
  );
};

export default ThumbnailHabit;
