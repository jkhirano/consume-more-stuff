import React, { Component } from "react";
import Habit from "../../components/Habit";
// import styles from './HabitList.module.css';

class HabitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      habits: [
        {
          name: "Bitting nail",
          category: "Hygiene"
        },
        {
          name: "Not washing your hand",
          category: "Hygiene"
        },
        {
          name: "Not taking shower",
          category: "Hygiene"
        }
      ]
    };
  }

  // App mounts;
  // Runs the most up to date state
  componentDidMount() {
    // App gets re-rendered;
    console.log("HabitList is born! Yay!");
  }

  render() {
    return (
      <ul>
        {this.state.habits.map(habits => {
          return <Habit name={habits.name} category={habits.category} />;
        })}
      </ul>
    );
  }
}

export default HabitList;
