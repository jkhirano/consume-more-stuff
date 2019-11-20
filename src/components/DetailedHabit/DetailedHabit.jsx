import React from "react";
// import styles from './DetailedHabit.module.css';
import "./DetailedHabit.css";
import EditItem from "../../containers/EditItem";

let DetailedHabit = function(props) {
  return (
    <div className="detailedHabit">
      <img src="" alt="" />
      <div className="detailedName">{props.name}</div>
      <div className="detailedPrice">$ {props.price}</div>
      <span className="title">Description:</span> {props.description}
      <div className="details">
        <span className="title">Category: </span> {props.category} <br />
        <span className="title">Condition:</span> {props.condition}
        <br />
        <span className="title">Status:</span> {props.status}
        <br />
        <span className="title">Manufacturer:</span> {props.manufacturer}
        <br />
        <span className="title">Model:</span> {props.model}
        <br />
        <span className="title">Dimensions:</span> {props.dimensions}
      </div>
      <div className="postInfo">
        Views: {props.view_count}
        <br />
        Email: {props.email}
        <br />
        Posted on: {props.created_at}
      </div>
      <button className="button">Add to cart</button>
      <button className="button">X</button>
      <div>
        <EditItem />
      </div>
    </div>
  );
};

export default DetailedHabit;
