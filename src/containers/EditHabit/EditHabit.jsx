import React, { Component } from "react";

import { editHabit } from "../../actions";
import { connect } from 'react-redux';

import styles from "./EditHabit.module.css";

class EditHabit extends Component {
  constructor(props) {
    super(props);

    this.state = {
        nameInput = '',
        categoryInput = ''
    };
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
    this.props.onEdit({ name, category });
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onEdit: habit => {
      dispatch(editHabit(habit));
    }
  };
};

EditHabit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditHabit);

export default EditHabit;
