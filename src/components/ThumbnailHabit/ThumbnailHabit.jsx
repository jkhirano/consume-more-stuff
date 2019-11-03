import React from "react";

const ThumbnailHabit = function(props) {
  console.log(props);
  console.log(props.name);
  console.log("hiyee");
  return (
    <li>
      {/* <span className="image">{props.habit.url}</span> | */}
      <span className="name">{props.habit.name}</span> |
      <span className="price">{props.habit.price}</span> |
      <span className="condition">{props.habit.condition_id}</span> |
      {props.message}
    </li>
  );
};

export default ThumbnailHabit;
