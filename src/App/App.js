import React from "react";
import styles from "./App.module.css";
import { connect } from "react-redux";
import { loadHabits } from "../actions";
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

const mapStateToProps = state => {
  return {
    habits: state.habits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadHabits: () => {
      return dispatch(loadHabits());
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
