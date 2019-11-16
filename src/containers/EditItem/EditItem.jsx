import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsEditItem } from "../../actions";

// import styles from "./EditItem.module.css";

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      description: "",
      price: "",
      manufacturer: "",
      model: "",
      dimensions: "",
      category_id: "",
      condition_id: "",
      item_status_id: ""
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

  handleDescriptionInput = e => {
    const { value } = e.target;
    this.setState({ descriptionInput: value });
  };

  handlePriceInput = e => {
    const { value } = e.target;
    this.setState({ priceInput: value });
  };

  handleManufacturerInput = e => {
    const { value } = e.target;
    this.setState({ manufacturerInput: value });
  };

  handleModelInput = e => {
    const { value } = e.target;
    this.setState({ modelInput: value });
  };

  handleDimensionsInput = e => {
    const { value } = e.target;
    this.setState({ dimensionsInput: value });
  };

  handleCategoryInput = e => {
    const { value } = e.target;
    this.setState({ categoryInput: value });
  };

  handleConditionInput = e => {
    const { value } = e.target;
    this.setState({ conditionInput: value });
  };

  handleItemStatusInput = e => {
    const { value } = e.target;
    this.setState({ itemStatusInput: value });
  };

  handleUpdateItem = () => {
    console.log("HANDLE UPDATE ITEM");
    this.props.onEdit({
      id: parseInt(this.state.idInput),
      name: this.state.nameInput,
      description: this.state.descriptionInput,
      price: parseFloat(this.state.priceInput),
      manufacturer: this.state.manufacturerInput,
      model: this.state.modelInput,
      dimensions: this.state.dimensionsInput,
      category_id: parseInt(this.state.categoryInput),
      condition_id: parseInt(this.state.conditionInput),
      item_status_id: parseInt(this.state.itemStatusInput)
    });
    return this.state;
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
            value={this.state.descriptionInput}
            onChange={this.handleDescriptionInput}
            placeholder="Description"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.priceInput}
            onChange={this.handlePriceInput}
            placeholder="Price"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.manufacturerInput}
            onChange={this.handleManufacturerInput}
            placeholder="Manufacturer"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.modelInput}
            onChange={this.handleModelInput}
            placeholder="Model"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.dimensionsInput}
            onChange={this.handleDimensionsInput}
            placeholder="Dimensions"
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
          <input
            type="text"
            value={this.state.conditionInput}
            onChange={this.handleConditionInput}
            placeholder="Condition"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.state.itemStatusInput}
            onChange={this.handleItemStatusInput}
            placeholder="Item Status"
          />
        </div>
        <div>
          <button onClick={this.handleUpdateItem}>Update Item</button>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log("MAP STATE TO PROPS");
//   console.log(state);
//   return { habits: state.habits };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onEdit: habit => {
//       console.log("MAP DISPATCH TO PROPS ONEDIT ITEM");
//       console.log(habit);
//       dispatch(actionsEditItem(habit));
//     }
//   };
// };

const mapStateToProps = store => {
  return {
    editedItem: store.editedItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onEdit: state => {
      console.log("MAP DISPATCH TO PROPS ON EDIT");
      let data = Object.assign({}, state);
      console.log(data);
      return dispatch(actionsEditItem(data));
    }
  };
};

EditItem = connect(mapStateToProps, mapDispatchToProps)(EditItem);

export default EditItem;
