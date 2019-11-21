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

  componentDidMount() {
    this.setState({ id: this.props.id });
  }

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
    this.props.onEdit({
      id: this.props.id,
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
    console.log("EDIT ITEM RENDER PROPS");
    console.log(this.props.item);
    return (
      <div>
        <div>
          Name:
          <input
            type="text"
            value={this.state.nameInput}
            onChange={this.handleNameInput}
            placeholder={this.props.item.name}
          />
        </div>
        <div>
          Description:
          <input
            type="text"
            value={this.state.descriptionInput}
            onChange={this.handleDescriptionInput}
            placeholder={this.props.item.description}
          />
        </div>
        <div>
          Price:
          <input
            type="text"
            value={this.state.priceInput}
            onChange={this.handlePriceInput}
            placeholder={this.props.item.price}
          />
        </div>
        <div>
          Manufacturer:
          <input
            type="text"
            value={this.state.manufacturerInput}
            onChange={this.handleManufacturerInput}
            placeholder={this.props.item.manufacturer}
          />
        </div>
        <div>
          Model:
          <input
            type="text"
            value={this.state.modelInput}
            onChange={this.handleModelInput}
            placeholder={this.props.item.model}
          />
        </div>
        <div>
          Dimensions:
          <input
            type="text"
            value={this.state.dimensionsInput}
            onChange={this.handleDimensionsInput}
            placeholder={this.props.item.dimensions}
          />
        </div>
        <div>
          Category:
          <input
            type="text"
            value={this.state.categoryInput}
            onChange={this.handleCategoryInput}
            placeholder={this.props.item.category}
          />
        </div>
        <div>
          Condition:
          <input
            type="text"
            value={this.state.conditionInput}
            onChange={this.handleConditionInput}
            placeholder={this.props.item.condition}
          />
        </div>
        <div>
          Item Status:
          <input
            type="text"
            value={this.state.itemStatusInput}
            onChange={this.handleItemStatusInput}
            placeholder={this.props.item.status}
          />
        </div>
        <div>
          <button onClick={this.handleUpdateItem}>Update Item</button>
        </div>
      </div>
    );
  }
}

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
