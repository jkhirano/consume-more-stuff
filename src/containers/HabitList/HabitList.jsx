import React, { Component } from "react";
import Habit from "../../components/Habit";

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
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.habits.map(habits => {
            return <Habit name={habits.name} category={habits.category} />;
          })}
        </ul>
      </div>
    );
  }
}

export default HabitList;
