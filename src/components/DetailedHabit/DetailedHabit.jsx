import React from "react";
// import styles from './DetailedHabit.module.css';
// import { connect } from "react-redux";

let DetailedHabit = function(props) {
  return (
    <div>
      <img src="" alt="" />
      <div className="name">Name</div>
      <div className="price">Price</div>
      <div className="desc">Description</div>
      <div className="postInfo">
        Category
        <br />
        User Information
        <br />
        View Count
        <br />
        Timestamps
      </div>
      <ul className="details">
        <li>Condition</li>
        <li>Status</li>
        <li>Manufacturer</li>
        <li>Model</li>
        <li>Dimensions</li>
      </ul>
      <button>Add to cart</button>
      <button>X</button>
    </div>
  );
};

// DetailedComponent = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DetailedComponent);

export default DetailedHabit;
