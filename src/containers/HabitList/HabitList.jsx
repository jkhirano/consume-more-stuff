import React, { Component } from 'react';
// import styles from './HabitList.module.css';


import Habit from '../../components/Habit'

class HabitList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.habits.map((habits) => {
              return (
                <Habit
                  name={habits.name}
                  category={habits.category}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default HabitList;