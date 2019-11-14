import React, { Component } from "react";
import Habit from "../../components/Habit";
// import styles from './HabitList.module.css';

class HabitList extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <ul>
        {this.props.habits.map(habit => {
          return (
            <Habit
              key={habit.id}
              id={habit.id}
              name={habit.name}
              category={habit.category}
            />
          );
        })}
      </ul>
    );
  }
}

export default HabitList;
