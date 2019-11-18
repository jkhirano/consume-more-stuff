import React from "react";
import styles from "./ThumbnailHabit.module.css";

const ThumbnailHabit = function(props) {
  return (
    <div
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
      <li className={styles.name}>{props.habit.name}</li>
      <span className={styles.price}>${props.habit.price}</span> |
      <span className={styles.condition}>
        {props.habit.condition.condition}
      </span>
    </div>
  );
};

export default ThumbnailHabit;
