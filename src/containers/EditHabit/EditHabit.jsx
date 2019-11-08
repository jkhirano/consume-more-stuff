import React, { Component } from "react";

import styles from "./EditHabit.module.css";

class EditHabit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleNameInput = e => {
    const { value } = e.target;
    this.setState({ nameInput: value });
  };

  handleCategoryInput = e => {
    const { value } = e.target;
    this.setState({ categoryInput: value });
  };

  handleUpdateHabit = () => {
    const { nameInput: name, categoryInput: category } = this.state;
    this.props.editHabit({ name: nameInput, category, categoryInput });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.nameInput}
            onChange={this.handleNameInput}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.categoryInput}
            onChange={this.handleCategoryInput}
            placeholder="Category"
          />
        </div>
        <div>
          <button onClick={this.handleUpdateHabit}>Update Habit</button>
        </div>
      </div>
    );
  }
}

export default EditHabit;
