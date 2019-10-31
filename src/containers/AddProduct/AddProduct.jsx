import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsAddProduct } from "../../actions";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mappedFields: {
        name: "",
        description: "",
        manufacturer: "",
        model: "",
        price: "",
        dimensions: ""
      },
      unmappedFields: {
        condition_id: 1,
        category_id: 1
      }
    };
  }

  handleInput = event => {
    const { value, name } = event.target;
    const state = { ...this.state };
    state.mappedFields[name] = value;
    this.setState({ state });
  };

  handleSubmit = () => {
    return this.props.addProductSubmit(this.state);
  };

  render() {
    return (
      <div>
        <div>{this.props.addedProductMessage}</div>
        <form>
          <ul>
            {Object.keys(this.state.mappedFields).map(key => {
              return (
                <li key={key}>
                  <label htmlFor={key}>
                    {key[0].toUpperCase() + key.slice(1) + ": "}
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={this.state.mappedFields[key]}
                    onChange={this.handleInput}
                  />
                </li>
              );
            })}
            <li>
              <label htmlFor="condition">Condition: </label>
              <select name="condition_id">
                <option value="1">Chronic</option>
                <option value="2">Learned</option>
                <option value="3">Obsessive</option>
              </select>
            </li>
            <li>
              <label htmlFor="category">Category: </label>
              <select name="category_id">
                <option value="1">Work</option>
                <option value="2">Hygiene</option>
                <option value="3">Social</option>
                <option value="4">Home</option>
              </select>
            </li>
            <li>
              <label htmlFor="url">Image URL: </label>
              <input type="file " name="url" />
            </li>
          </ul>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store.addedProduct);
  let addedProductMessage = "";
  if (store.addedProduct) {
    addedProductMessage = "Product successfully added!";
  }

  return {
    addedProductMessage: addedProductMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductSubmit: state => {
      let data = Object.assign({}, state.mappedFields, state.unmappedFields, {
        user_id: 1
      });
      console.log(data);
      return dispatch(actionsAddProduct(data));
    }
  };
};

AddProduct = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);

export default AddProduct;