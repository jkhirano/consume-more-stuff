import React from "react";
import styles from "./App.module.css";
import { connect } from "react-redux";

import EditHabit from "../container/EditHabit";
import HabitList from "../containers/HabitList";

class App extends Component {
  constructor(props) {
    super(props);
  }

  editHabit = ({ name, category }) => {
    // const habits = this.props.habits.concat({ name, category });
    this.setState({ habits });
  };

  render() {
    return (
      <div className={styles.App}>
        <EditHabit editHabit={this.editHabit} />
        <HabitList habits={this.props.habits} />
      </div>
    );
  }
}

export default App;
