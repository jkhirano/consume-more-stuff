import React, { Component } from "react";
import { connect } from "react-redux";
import ThumbnailHabit from "../../components/ThumbnailHabit";
import { actionsGetThumbnail } from "../../actions";

class HabitList extends Component {
  constructor(props) {
    super(props);

    // extra storage
    this.state = {
      // localHabits: [{ name: "test" }]
      id: 0
    };
  }

  changeDetailedId = id => {
    console.log(id);
    this.setState({ id: id });
  };

  // App mounts;
  // Runs the most up to date state
  componentDidMount() {
    // App gets re-rendered;
    // console.log("localhabits", this.props.localHabits);
    // console.log("HabitList is born! Yay!");
    // this.setState = {};
    // this.props.getThumbnail();
    this.props.getThumbnail();
  }

  render() {
    return (
      <ul>
        {this.props.localHabits.map(element => {
          // console.log("thumbnail habit is being created...");
          return (
            <ThumbnailHabit
              habit={element}
              changeDetailedId={this.changeDetailedId}
            />
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  console.log("state to props running");
  return {
    localHabits: state.habits
    // name: state.habits.name,
    // description: state.description,
    // price: state.habits.price,
    // manufacturer: state.manufacturer,
    // model: state.model,
    // dimensions: state.dimensions,
    // view_count: state.view_count,
    // user_id: state.user_id,
    // category_id: state.category_id,
    // condition_id: state.condition_id
    // item_status_id: state.item_status_id,
    // created_at: state.created_at,
    // updated_at: state.updated_at
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getThumbnail: () => {
      console.log("getThumbnail hit");
      return dispatch(actionsGetThumbnail()); // dispatches getThumbnail in actions/index.js
    }
  };
}

HabitList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList);

export default HabitList;
