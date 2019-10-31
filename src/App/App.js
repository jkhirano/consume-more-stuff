import React from "react";
import "./App.module.css";
import HabitList from "../containers/HabitList/HabitList";
import NavigationComponent from "../containers/NavigationComponent";
import AddProduct from "../containers/AddProduct";

function App() {
  return (
    <div>
      <NavigationComponent />
      <HabitList />
      <AddProduct />
    </div>
  );
}

export default App;
