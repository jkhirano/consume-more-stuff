import React, { Component } from "react";
import { connect } from "react-redux";
import { loadHabits } from "../actions";
import "./App.css";

import Header from "../components/Header";
import HabitList from "../containers/HabitList";
import NavigationComponent from "../containers/NavigationComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <div className="Header">
          <Header />
        </div>
        <div className="Navigation">
          <NavigationComponent />
        </div>
        <div className="HabitList">
          <HabitList habits={this.props.habits} />
        </div>
        <div className="footer">Footer</div>
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
