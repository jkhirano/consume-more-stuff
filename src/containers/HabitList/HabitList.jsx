import React, { Component } from "react";
import DetailedHabit from "../../components/DetailedHabit";
import { connect } from "react-redux";
import { loadDetailAsync } from "../../actions";
// import styles from './HabitList.module.css';

class HabitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      habits: []
    };
  }

  componentDidMount() {
    this.props.loadDetailAsync(1);
  }

  render() {
    return (
      <div>
        HabitList Component
        <DetailedHabit
          name={this.props.name}
          description={this.props.description}
          price={this.props.price}
          manufacturer={this.props.manufacturer}
          model={this.props.model}
          dimensions={this.props.dimensions}
          view_count={this.props.view_count}
          user_id={this.props.user_id}
          category_id={this.props.category_id}
          category={this.props.category}
          condition_id={this.props.condition_id}
          item_status_id={this.props.item_status_id}
          created_at={this.props.created_at}
          updated_at={this.props.updated_at}
        />
        End of HabitList Component
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.name,
    description: state.description,
    price: state.price,
    manufacturer: state.manufacturer,
    model: state.model,
    dimensions: state.dimensions,
    view_count: state.view_count,
    user_id: state.user_id,
    category_id: state.category_id,
    category: state.category,
    condition_id: state.condition_id,
    item_status_id: state.item_status_id,
    created_at: state.created_at,
    updated_at: state.updated_at
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDetailAsync: id => {
      return dispatch(loadDetailAsync(id));
    }
  };
};

HabitList = connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitList);

export default HabitList;
