import React, { Component } from "react";
import DetailedHabit from "../../components/DetailedHabit";
import { connect } from "react-redux";
import { loadDetailAsync } from "../../actions";
// import styles from './HabitList.module.css';

class HabitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      habits: [
        {
          name: "Bitting nail",
          category: "Hygiene"
        },
        {
          name: "Not washing your hand",
          category: "Hygiene"
        },
        {
          name: "Not taking shower",
          category: "Hygiene"
        }
      ]
    };
  }

  componentDidMount() {
    this.props.loadDetailAsync();
  }

  render() {
    return (
      <div>
        HabitList Component
        <DetailedHabit message={this.props.message} />
        End of HabitList Component
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDetailAsync: () => {
      return dispatch(loadDetailAsync());
    }
  };
};

HabitList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList);

export default HabitList;
