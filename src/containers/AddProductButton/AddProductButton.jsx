import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsToggle } from "../../actions";

class AddProductButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddClick = () => {
    this.props.toggle("add");
    //
  };

  render() {
    return (
      <button className="addProduct" onClick={this.handleAddClick}>
        New +
      </button>
    );
  }
}

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    toggle: link => {
      return dispatch(actionsToggle(link));
    }
  };
};

AddProductButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProductButton);

export default AddProductButton;
