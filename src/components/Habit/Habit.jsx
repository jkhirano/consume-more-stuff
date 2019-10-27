import React from "react";
// import styles from './Habit.module.css'
import { connect } from "react-redux";
import { actionsGetHiyee } from "../../actions";

let Habit = function(props) {
  return (
    <div>
      <span className="name">{props.name}</span>:
      <span className="category">{props.category}</span>
      <button
        onClick={function() {
          props.getHiyee(); //calls method in mapDispatchToProps
        }}
      >
        activate getHiyee
      </button>
      <div>{props.message}</div>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    message: store.message.message
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getHiyee: () => {
      return dispatch(actionsGetHiyee()); //dispatches actionsGetHiyee in actions/index.js
    }
  };
};

Habit = connect(
  mapStateToProps,
  mapDispatchToProps
)(Habit);

export default Habit;
// testing Github... there is a empty new line below this...
