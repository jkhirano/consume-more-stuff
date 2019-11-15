import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "../components/Header";
import HabitList from "../containers/HabitList";
import NavigationComponent from "../containers/NavigationComponent";
import AddProduct from "../containers/AddProduct";
import Footer from "../components/Footer";

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
        <div className="content-container">
          <div className="Navigation">
            <NavigationComponent />
          </div>
          <div className="HabitList">
            <HabitList habits={this.props.habits} />
          </div>
        </div>
        <AddProduct />
        <Footer />
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

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
