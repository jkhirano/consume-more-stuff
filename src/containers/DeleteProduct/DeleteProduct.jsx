import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsDeleteProduct } from "../../actions";
import { loadDetailAsync } from "../../actions";

class DeleteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.delete = this.delete.bind(this);
    console.log(this.props.localHabits);
  }
  delete(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(this.props.id)
    this.props.deleteProduct(this.props.id);
  }

  render() {
    return (
      <div>
        <button onClick={this.delete}>Delete</button>
      </div>
    )
  }
};

const mapStateToProps = store => {
  return {
    localHabits: store.habits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: (data) => {
      return dispatch(actionsDeleteProduct(data));
    },
    loadDetailAsync: id => {
      return dispatch(loadDetailAsync(id));
    }
  };
};

DeleteProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteProduct);

export default DeleteProduct;