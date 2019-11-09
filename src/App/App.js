import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.module.css";

import Header from "../components/Header";
import HabitList from "../containers/HabitList/HabitList";
import NavigationComponent from "../containers/NavigationComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <NavigationComponent />
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
  return {};
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
