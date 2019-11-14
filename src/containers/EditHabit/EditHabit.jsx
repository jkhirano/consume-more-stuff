import React, { Component } from "react";

import { editHabit } from "../../actions";
import { editHabitAsync } from "../../actions";
import { connect } from "react-redux";

// import styles from "./EditHabit.module.css";

class EditHabit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idInput: "",
      nameInput: "",
      categoryInput: ""
    };
  }

  handleIdInput = e => {
    const { value } = e.target;
    this.setState({ idInput: value });
  };

  handleNameInput = e => {
    const { value } = e.target;
    this.setState({ nameInput: value });
  };

  handleCategoryInput = e => {
    const { value } = e.target;
    this.setState({ categoryInput: value });
  };

  handleUpdateHabit = () => {
    this.props.onEdit({
      id: parseInt(this.state.idInput),
      name: this.state.nameInput,
      category: this.state.categoryInput
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.idInput}
            onChange={this.handleIdInput}
            placeholder="ID"
          />
        </div>
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

const mapStateToProps = state => {
  console.log("MAP STATE TO PROPS");
  console.log(state);
  return { habits: state.habits };
};

const mapDispatchToProps = dispatch => {
  return {
    onEdit: habit => {
      // dispatch(editHabitAsync(habit));
      console.log("MAP DISPATCH TO PROPS ONEDIT HABIT");
      console.log(habit);
      dispatch(editHabit(habit));
    }
  };
};

EditHabit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditHabit);

export default EditHabit;
