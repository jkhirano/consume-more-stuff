import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsToggle } from "../../actions";

class AddProductButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddClick = () => {
    console.log("handleAddClick works");
    this.props.toggle("add");
    //
  };

  render() {
    return (
      <img
        className="navButton"
        src="https://image.flaticon.com/icons/svg/1237/1237946.svg"
        alt="add button"
        onClick={this.handleAddClick}
      />
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
