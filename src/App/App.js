import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./App.module.css";

import Header from "../components/Header";
import HabitList from "../containers/HabitList";
import NavigationComponent from "../containers/NavigationComponent";
import AddProduct from "../containers/AddProduct";
import AuthBox from "../containers/AuthBox/AuthBox";
import Footer from "../components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.appContainer}>
        <div className={styles.Header}>
          <Header />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.Navigation}>
            <NavigationComponent />
          </div>
          <div className={styles.HabitList}>
            {this.props.display !== "add" ? (
              <HabitList habits={this.props.habits} />
            ) : (
              <AddProduct />
            )}
          </div>
        </div>
        <Footer />
        {this.props.login_register === "register" ||
        this.props.login_register === "login" ? (
          <AuthBox login_register={this.props.login_register} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    habits: state.habits,
    login_register: state.login_register,
    display: state.display
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
