import React from "react";
import "./App.module.css";
import HabitList from "../containers/HabitList/HabitList";
import NavigationComponent from "../containers/NavigationComponent.jsx/NavigationComponent";

function App() {
  return (
    <div>
      <NavigationComponent />
      <HabitList />
    </div>
  );
}

export default App;
