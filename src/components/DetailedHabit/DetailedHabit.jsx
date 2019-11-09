import React from "react";
// import styles from './DetailedHabit.module.css';

let DetailedHabit = function(props) {
  return (
    <div>
      DetailedHabit Component
      <img src="" alt="" />
      <div className="name">Name: {props.name}</div>
      <div className="price">Price: {props.price}</div>
      <div className="desc">Description: {props.description}</div>
      <div className="postInfo">
        Category: {props.category}
        <br />
        User: {props.user}
        <br />
        Views: {props.view_count}
        <br />
        Posted on: {props.created_at}
      </div>
      <ul className="details">
        <li>Condition: {props.condition}</li>
        <li>Status: {props.status}</li>
        <li>Manufacturer: {props.manufacturer}</li>
        <li>Model: {props.model}</li>
        <li>Dimensions: {props.dimensions}</li>
      </ul>
      <button>Add to cart</button>
      <button>X</button>
      <div>{props.message}</div>
      End of Detailed Habit Component
    </div>
  );
};

export default DetailedHabit;
