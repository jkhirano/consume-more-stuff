import React, { Component } from "react";
import { connect } from "react-redux";
import ThumbnailHabit from "../../components/ThumbnailHabit";
import { actionsGetThumbnail } from "../../actions";

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
    this.props.getThumbnail();
  }

  render() {
    return (
      <div>
        <ThumbnailHabit habit={"this will be filled with habit"} />
        <div>this.props.message</div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store.message);
  return { message: store.message };
};

function mapDispatchToProps(dispatch) {
  return {
    getThumbnail: () => {
      return dispatch(actionsGetThumbnail()); // dispatches getThumbnail in actions/index.js
    }
  };
}

HabitList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList);

export default HabitList;
