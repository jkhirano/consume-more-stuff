import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import Header from "../components/Header";
import HabitList from "../containers/HabitList";
import NavigationComponent from "../containers/NavigationComponent";
import AddProduct from "../containers/AddProduct";

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
        <div className="Footer">
          Footer
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/dave-gandy"
              title="Dave Gandy"
            >
              Dave Gandy
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/google" title="Google">
              Google
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/smashicons"
              title="Smashicons"
            >
              Smashicons
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </div>
        <AddProduct />
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

// import React, { Component } from "react";
// import styles from "./App.module.css";
// import { connect } from "react-redux";
// import { loadHabitsAsync } from "../actions";
// import { loadHabits } from "../actions";
// import EditHabit from "../containers/EditHabit";
// import HabitList from "../containers/HabitList";

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   componentDidMount() {
//     // this.props.loadHabitsAsync();
//     console.log("COMPONENT DID MOUNT");
//     console.log(this.props);
//     this.props.loadHabits();
//   }

//   render() {
//     return (
//       <div className={styles.App}>
//         <EditHabit editHabit={this.editHabit} />
//         <HabitList habits={this.props.habits} />
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return {
//     habits: state.habits
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // loadHabitsAsync: () => {
//     //   return dispatch(loadHabitsAsync());
//     // }
//     loadHabits: () => {
//       return dispatch(loadHabits());
//     }
//   };
// };

// App = connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
