import React from "react";
import "./App.module.css";
import HabitList from "../containers/HabitList/HabitList";
import ThumbnailHabit from "../components/ThumbnailHabit";
import NavigationComponent from "../containers/NavigationComponent";

function App() {
  return (
    <div>
      <NavigationComponent />
      <HabitList />
      <ThumbnailHabit />
    </div>
  );
}

export default App;
