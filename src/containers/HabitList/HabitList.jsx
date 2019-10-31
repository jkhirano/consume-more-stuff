import React, { Component } from "react";
import ThumbnailHabit from "../../components/ThumbnailHabit";
import { actionsGetThumbnail } from "../../actions";
import { connect } from "react-redux";

class HabitList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // App mounts;
  // Runs the most up to date state
  componentDidMount() {
    // App gets re-rendered;
    console.log("HabitList is born! Yay!");
    // this.setState = {};
  }

  render() {
    return (
      <div>
        <ThumbnailHabit />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getThumbnail: function() {
      return dispatch(actionsGetThumbnail()); // dispatches getThumbnail in actions/index.js
    }
  };
};

const mapStateToProps = store => {
  console.log(store.message);
  return { message: store.message };
};

HabitList = connect(
  mapDispatchToProps,
  mapStateToProps
)(HabitList);

export default HabitList;
