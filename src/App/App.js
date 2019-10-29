import React from "react";
import "./App.module.css";
import HabitList from "../containers/HabitList/HabitList";
import HabitThumbnail from "../components/HabitThumbnail";

function App() {
  return (
    <div>
      <HabitList />
      <HabitThumbnail />
    </div>
  );
}

export default App;
