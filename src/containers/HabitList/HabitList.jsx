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
        <DetailedHabit name={this.props.name} />
        End of HabitList Component
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name
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
