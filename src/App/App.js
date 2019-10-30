import React from "react";
import "./App.module.css";
import HabitList from "../containers/HabitList/HabitList";
import DetailedHabit from "../components/DetailedHabit";

function App() {
  return (
    <div>
      <HabitList />
      <DetailedHabit />
    </div>
  );
}

export default App;
