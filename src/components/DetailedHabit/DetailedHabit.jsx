import React from "react";
// import styles from './DetailedHabit.module.css';

let DetailedHabit = function(props) {
  return (
    <div>
      <img src="" alt="" />
      <div className="name">{props.name}</div>
      <div className="price">{props.price}</div>
      <div className="desc">{props.description}</div>
      <div className="postInfo">
        {props.category}
        <br />
        {props.username}
        <br />
        {props.view_count}
        <br />
        {props.created_at}
      </div>
      <ul className="details">
        <li>{props.condition_id}</li>
        <li>{props.item_status_id}</li>
        <li>{props.manufacturer}</li>
        <li>{props.model}</li>
        <li>{props.dimensions}</li>
      </ul>
      <button>Add to cart</button>
      <button>X</button>
    </div>
  );
};

export default DetailedHabit;
