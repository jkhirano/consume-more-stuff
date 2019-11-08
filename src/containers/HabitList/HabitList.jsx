import React, { Component } from "react";
import Habit from "../../components/Habit";
// import styles from './HabitList.module.css';

class HabitList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.habits.map(habits => {
          return <Habit name={habits.name} category={habits.category} />;
        })}
      </ul>
    );
  }
}

export default HabitList;
