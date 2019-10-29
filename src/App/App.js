import React, { Component } from "react";
import { connect } from 'react-redux';
import { loadHabits } from '../actions';
import "./App.module.css";

import Header from '../components/Header'
import HabitList from "../containers/HabitList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <HabitList habits={this.props.habits} />
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    habits: state.habits
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadHabits: () => {
      return dispatch(loadHabits());
    }
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
