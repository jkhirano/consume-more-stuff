import React, { Component } from "react";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { loadHabitsAsync } from "../actions";
import { loadHabits } from "../actions";
import EditHabit from "../containers/EditHabit";
import HabitList from "../containers/HabitList";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // this.props.loadHabitsAsync();
    console.log("COMPONENT DID MOUNT");
    console.log(this.props);
    this.props.loadHabits();
  }

  render() {
    return (
      <div className={styles.App}>
        <EditHabit editHabit={this.editHabit} />
        <HabitList habits={this.props.habits} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    habits: state.habits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // loadHabitsAsync: () => {
    //   return dispatch(loadHabitsAsync());
    // }
    loadHabits: () => {
      return dispatch(loadHabits());
    }
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
