import React from "react";
import "./App.module.css";
import HabitList from "../containers/HabitList/HabitList";
import ThumbnailHabit from "../components/ThumbnailHabit";

function App() {
  return (
    <div>
      <HabitList />
      <ThumbnailHabit />
    </div>
  );
}

export default App;
